/*
 * This file should contain code for the following tasks:
 * 1. Display the list of chat messages.
 * 2. Send a new message.
 * 3. Allow a user to edit and delete their own messages.
 * 4. Allow a user to log out.
 * 5. Redirect a user to index.html if they are not logged in.
 */

var logoutButton = document.getElementById('logout');

var auth = firebase.auth();
var database = firebase.database();

logoutButton.addEventListener('click', function (e) {
    auth.signOut();
});

var messagesList = document.getElementById("messages");
var messageForm = document.getElementById("message-form");
var messageInput = document.getElementById("message-input");

auth.onAuthStateChanged(function (user) {
    // If the user is logged in, user will be an object (truthy).
    // Otherwise, it will be null (falsey).
    if (user) {

        profilePic = user.photoURL;
        userId = user.id;
        userName = user.displayName;

        var messages = database.ref('messages');
        messages.limitToLast(100);

        // This event listener will be called for each item
        // that has been added to the list.
        // Use this to generate each chat message,
        // both on initial page load and whenver someone creates a new message.
        messages.on('child_added', function (data) {
            var id = data.key;
            var message = data.val();

            var messageText = message.text;
            var timestamp = new Date(message.timestamp).toLocaleString();
            var displayName = message.displayName;

            // Create li element
            var messageLi = document.createElement('li');
            messageLi.id = id;

            // Create message div
            var messageDiv = document.createElement('div');
            messageDiv.classList.add('message');

            // Create controls
            var controlsDiv = document.createElement('div');
            controlsDiv.classList.add('message-controls');

            // Create message text
            var messageParagraph = document.createElement('p');
            messageParagraph.classList.add('message-text');
            messageParagraph.setAttribute("id", "message-text-" + id);
            messageParagraph.innerText = messageText; // innerText will properly display line breaks, textContent does not.

            // Create Gravatar image
            var pic = document.createElement('img');
            var picSrc = message.pic
            pic.setAttribute('src', picSrc);
            messageDiv.appendChild(pic);

            // Author display name
            var authorSpan = document.createElement('span');
            authorSpan.classList.add('message-author');
            authorSpan.textContent = displayName;
            controlsDiv.appendChild(authorSpan);

            // timestamp
            var timeSpan = document.createElement('span');
            timeSpan.classList.add('message-time');
            timeSpan.textContent = ' at ' + timestamp;
            controlsDiv.appendChild(timeSpan);

            // new timestamp
            var newTimeSpan = document.createElement('span');
            newTimeSpan.classList.add('message-time');
            controlsDiv.appendChild(newTimeSpan);


            if (user.emailVerified) {
                // EDIT
                var editButton = document.createElement('button');
                editButton.classList.add('btn');
                editButton.classList.add('btn-default');
                editButton.classList.add('btn-xs');
                editButton.classList.add('edit-button');
                editButton.textContent = 'Edit';
                controlsDiv.appendChild(editButton);

                editButton.addEventListener('click', function (e) {
                    var editBox = document.createElement('textarea');
                    editBox.textContent = "Edit Message";
                    controlsDiv.appendChild(editBox);

                    var saveButton = document.createElement('button');
                    saveButton.classList.add('btn');
                    saveButton.classList.add('btn-default');
                    saveButton.classList.add('btn-xs');
                    saveButton.classList.add('save-button');
                    saveButton.textContent = 'Save';
                    controlsDiv.appendChild(saveButton);

                    var editedText = messageParagraph.innerText;
                    editBox.innerText = editedText;

                    saveButton.addEventListener('click', function (e) {
                        messages.child(id).update({
                            text: editBox.value,
                            newTimeStamp: new Date().getTime()
                        }).then(function () {
                            editBox.style.display = 'none';
                            saveButton.style.display = 'none';
                            cancelButton.style.display = 'none';
                        }).catch(function (error) {
                            window.alert('Sorry! Unable to edit the message.');
                        });
                    });

                    var cancelButton = document.createElement('button');
                    cancelButton.classList.add('btn');
                    cancelButton.classList.add('btn-default');
                    cancelButton.classList.add('btn-xs');
                    cancelButton.classList.add('cancel-button');
                    cancelButton.textContent = "Cancel";
                    controlsDiv.appendChild(cancelButton);

                    cancelButton.addEventListener('click', function (e) {
                        editBox.style.display = 'none';
                        cancelButton.style.display = 'none';
                        saveButton.style.display = 'none';
                    });

                });

                // DELETE
                var deleteSpan = document.createElement('button');
                deleteSpan.classList.add('btn');
                deleteSpan.classList.add('btn-default');
                deleteSpan.classList.add('btn-xs');
                deleteSpan.classList.add('delete-button');
                deleteSpan.textContent = 'Delete';
                controlsDiv.appendChild(deleteSpan);

                deleteSpan.addEventListener('click', function (e) {
                    var confirmation = confirm("Are you sure that you want to delete this message?");

                    if (confirmation) {
                        messages.child(id).remove();
                    }

                });
            } else {
                window.alert("Please verify email! ");
            }


            // Append controls to message div
            messageDiv.appendChild(controlsDiv);

            // Append message text
            messageDiv.appendChild(messageParagraph);

            // Append message div to message li
            messageLi.appendChild(messageDiv);

            // Append message li to messages ul
            messagesList.appendChild(messageLi);


        });


        
        // This event listener will be called whenever an item in the list is edited.
        // Use this to update the HTML of the message that was edited.
        messages.on('child_changed', function (data) {
            var id = data.key;
            var message = data.val();
            var newTimeStamp = new Date(message.timestamp).toLocaleString();

            document.getElementById('message-text-' + id).innerText = message.text;

            if (newTimeStamp) {
                var newTime = document.createElement('span');
                newTime.classList.add('edit-time');
                newTime.textContent = 'Edited on ' + newTimeStamp;
                document.getElementById(data.key).appendChild(newTime);
            }


        });

        // This event listener will be called whenever an item in the list is deleted.
        // Use this to remove the HTML of the message that was deleted.
        messages.on('child_removed', function (data) {
            var id = data.key;
            document.getElementById(id).remove();
        });


    } else {
        // Logged out
        window.location.href = 'index.html';
    }
});

var messageData = document.getElementById('message-input');

messageForm.addEventListener("submit", function (e) {
    e.preventDefault();

    var user = auth.currentUser;
    var userId = user.uid;
    if (user.emailVerified) {

        // Get the ref for your messages list
        var messages = database.ref('messages');

        // Get the message the user entered
        var message = messageInput.value;

        // Create a new message and add it to the list.
        messages.push({
                displayName: user.displayName,
                userId: userId,
                pic: profilePic,
                text: message,
                timestamp: new Date().getTime() // unix timestamp in milliseconds

            })
            .then(function () {
                messageData.value = "";

            })
            .catch(function (error) {
                windows.alert("Your message was not sent!");
                messageData;
            });

    } else {
        window.alert("Please verify email! ");
    }
});





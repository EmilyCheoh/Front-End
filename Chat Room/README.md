# Challenge 6 - Firebase

For this challenge, you will use your knowledge with HTML, CSS, and JavaScript to build a simple chat application using Firebase.

## Resources

*   <a href="https://firebase.google.com/docs/database/web/read-and-write#update_specific_fields" target="_blank">Firebase: Read and Write Data</a>
*   <a href="https://firebase.google.com/docs/database/web/lists-of-data" target="_blank">Firebase: Working with Lists</a>
*   <a href="https://firebase.google.com/docs/auth/web/manage-users" target="_blank">Firebase: Manage Users</a>
*   <a href="https://firebase.google.com/docs/auth/web/password-auth" target="_blank">Firebase: Password Authentication</a>
*   <a href="https://firebase.google.com/docs/reference/js/" target="_blank">Firebase: JavaScript API Documentation</a>
*   <a href="http://getbootstrap.com/css" target="_blank">Bootstrap: CSS</a>
*   <a href="http://getbootstrap.com/components/" target="_blank">Bootstrap: Components</a>
*   <a href="https://en.gravatar.com/" target="_blank">Gravatar</a>
*   <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes" target="_blank">MDN: Input field types</a>
*   <a href="https://developers.google.com/web/fundamentals/getting-started/primers/promises" target="_blank">Javascript Promises - An Introduction</a>

## Setup

### Update your challenge repo

Please perform the following steps in your challenges repo (on your personal machine) to update your repo and pull down the latest starter code.

1. First, verify you have no uncommitted changes: `git status`
2. Switch back to your `master` branch: `git checkout master`
3. Pull the latest code into your `master` branch: `git pull origin master`
4. Only if you have not done so on your current computer already, you will need to connect your challenges repo to the main challenges repo. To do so, perform this command (you only need to perform this command once for each computer): `git remote add upstream https://github.com/info343a-au17/challenges.git`
5. Create a new branch for this challenge: `git checkout -b challenge6`
6. Now update your repo with the new starter code for this challenge. To do so, perform this command (you will need to perform this command once each week when a new challenge is posted): `git pull upstream master`
7. If you receive a permissions error, please check your email for an invite to the organization, and accept the invite. If you cannot find the invite, please contact the teaching team immediately.
8. If you encounter a merge conflict, you will need to resolve the merge conflict before you can start. Please contact the teaching team if you need help.
9. You can now push this new branch to Github: `git push origin challenge6`

You are now ready to start working on the challenge. Just like the previous challenges, all work should be committed to a feature branch, and then you will open a pull request from that branch into master. You will also merge your code from your feature branch into the `gh-pages` branch to host your work on Github Pages.

### Create a Branch

Create a new branch on your personal computer named `challenge6` and switch to it. All commits for this challenge should be done on this branch. You will create a pull request to merge those back into master at the end of the challenge.

## Setup Firebase

You will need perform the following tasks to get started with Firebase (if you have not done so already).

* <a href="https://nodejs.org/en/" target="_blank">Install Node.js v8.</a>
* Install the Firebase Tools: `npm install firebase-tools -g --unsafe-perm`. If you are on a Mac and you receive a permissions error, perform `sudo npm install firebase-tools -g --unsafe-perm`.
* Create an acccount on <a href="https://firebase.google.com/" target="_blank">Firebase</a>.

Next, you will need to create a new Firebase project and setup your code to connect with it.

* First, use the Firebase Web Console to create a new project. Give your project the name of your chat application.
* After you create the project, click the button labeled "Add Firebase to your web app". Copy these values (not including the `<script>` tags) and paste them into the public/app.js file in your challenges repo.
* Go to the Authentication tab, and enable the Email/Password sign in method.

Next, you will use the Firebase Tools CLI to setup your code with your project. **IMPORTANT: Windows users need to use the Windows Command Prompt (instead of the Git Bash Terminal) to perform the following operations**.

1. First, cd to the `challenge6` directory inside your Challenges repo.
2. Next, perform `firebase login`. If you are not already logged in, your browser will open to log in with a Google account. Important: You must log in with the same account you used to create your project in the Firebase Web Console.
3. Next, perform `firebase init`.
4. The first prompt asks **What Firebase CLI features do you want to setup for this folder?**. Select **Database** and **Hosting**.
5. The second prompt asks **Select a default Firebase project for this directory?** Use the arrows keys to select the project you created earlier for the challenge, and hit Enter.
6. The third prompt asks **What file should be used for Database Rules?** Press enter to select the default setting.
7. The fourth prompt asks **What do you want to use as your public directory?** Press enter to select the default setting.
8. The fifth prompt asks **Configure as a single-page app (rewrite all urls to /index.html)?** Press enter to select the default setting.
9. The sixth prompt asks **File public/index.html already exists. Overwrite?** Press enter to select the default setting.

Your project is now setup on Firebase and on your computer. Please verify you can perform the following actions from the terminal:

* To run your web app locally, run: `firebase serve`
* To deploy your web app to Firebase's servers, run: `firebase deploy`

## Requirements

For this assignment, the overall look and feel of your application is up to you, however, the functionality must satisfy the following requirements:

### A. Look / Feel

1. Your application must work correctly on both small and large screens (from 320px to 1200px, at least).
2. It should be styled with more than just the default browser styling. It is recommended to use a CSS Framework such as Bootstrap, Material Design Lite, or Foundation.
3. Regardless of which CSS Framework you use, your app must have a consistent and appealing look and feel.

### B. Hosting

1. User account, chat messages, and any other data for your app must be stored on Firebase.
2. Preferably, your web app should be hosted on Firebase's web hosting.
3. If you are unable to get Firebase Hosting to work, you can use Github Pages as a backup. Note, your url will include `public` in it since the files for this project will be in the `public` folder.

### C. Pages

1. There must be a page named `index.html` where users can sign up for a new account, or login with an existing account.
2. There must be a page named `chat.html` where users view and send messages.

### D. Sign Up / Login Page

1.  The page must display the name of your chat app at the top of the page and in the title of the browser tab.
2.  If a user who is not already logged in opens **index.html**, they should see two forms, one to create an account, and one to log in with an existing account.
3.  The sign up form must provide the following fields:
    1.  **Display Name **
        1.  This will be the users full name. This field is required.
    2.  **Email**
        1.  The user's email address. This field is required, and the input must be a valid email address.
    3.  **Password**
        1.  The user's password to login. This field is required, and must be at least 6 characters in length. The password must not be visible to the user in the browser in plain text.
    4.  **Password (Confirmation)**
        1.  The user's password confirmed. This field is required, and must exactly match the original password provided.
4.  If any of the required fields are missing, or are not the in correct format, an error must be shown to the user when they click the sign up button.
5.  If all of the required fields are provided and are in the correct form, use the Firebase API to create a new account for that user.
6.  After creating the user's account, you must set their display name to the display name they provided.
7.  After creating the user's account, you must also set their profile photo to the **Gravatar URL** for their email address. You can generate this url with the following code:

    <pre>var photoURL = "https://www.gravatar.com/avatar/" + md5(email);</pre>

8.  If you receive an error from the Firebase API when creating the user's account, you must show that error to the user.
9.  After the account is created successfully (and additional fields have been updated), send the user an email to verify their account.
10.  When the account is created and the verification email is sent successfully, redirect the user to **chat.html. **You should also redirect the user to **chat.html** if sending the verification results in an error.
11.  The sign in form must provide the following fields:
        1.  **Email**
        2.  **Password**
12.  If you receive an error from the Firebase API when logging in, you must show that error to the user.
13.  If the user logs in successfully, redirect the user to **chat.html.**
14.  If a user who is already logged in opens** **index.html****, they should be redirected to** **chat.html**.**

### Chat Page

1.  The page must display the name of your chat app at the top of the page and in the title of the browser tab.
2.  If a user who is logged in opens **chat.html**, they should see a list of chat messages.
3.  If a user who is not logged opens **chat.html**, they should be redirected to **index.html**.
4.  The page must contain a button or link somewhere on the page to allow the user to log out. When the call to the Firebase API to log out the user has completed successfully, they should be redirected to **index.html. **
5.  When the page loads, it must show the most recent 100 chat messages (it can show more than 100 messages during the course of a chat session, but it should initially load the most recent 100), with the most recent messages at the bottom of the page. 
6.  The page must contain a text area for the user to input their chat message. 
7.  The page must contain a button for the user to submit their chat message. 
8.  Submitting a new chat message should result in the message appearing at the bottom of the message list for all users viewing the chat room (without refreshing the page).
9.  After the message is sent successfully, the text area should clear, and the text area should get focused with the cursor.
10.  If the message fails to send, the message text must remain in the box, and the user must be shown the error message.
11.  Each chat message must show the following:
        1.  The Gravatar image of the user who sent the message.
        2.  The display name of the user who sent the message.
        3.  The time and date (month, day, year) that the message was sent. This information must be presented in human readable format.
        4.  Messages that were sent by the current logged in user must have controls (links or buttons) for the user to edit and delete their message.
        5.  The text content of the message. The chat app only needs to be support plain text (i.e. doesn't have to support images, link, emojis, etc), but it does need to support line breaks and blank lines in messages in both the text area input and when rendering messages in the chat room.
12.  Messages that were sent by the current logged in user must provide the ability for the user to edit the message.
        1.  The updated message must not be saved until the user explicitly clicks a button indicating they want the edited message saved. 
        2.  There must be a button allowing the user to stop editing the current message, resetting the message back to its original text.
        3.  When a message is edited, it must update for all users (without anyone refreshing their page).
        4.  When the edited message is saved, add a new property to the saved message to store the last time the message was edited, and the UI should show this time to the user (in addition to the original time the message was posted).
13.  Messages that were sent by the current logged in user must provide the ability for the user to delete the message.
        1.  When the user clicks the link/button to delete a message, a confirmation message should be shown to the user asking if they are user if they are sure they want to delete the message.
        2.  If the user confirms they want to delete the message, the message should disappear from the message list for all users in the chat room (without refreshing the page) and should be deleted from the Firebase database.
        3.  If the user does not confirm they want to delete the message, the message should remain.
14.  Users who have not verified their email address must not be allowed to create/update/delete any messages. You must show a message to these users letting them know they need to verify their email address in order to post. You may also provide a link allowing them to resend the verification email.

### Screenshots

Below are some screenshots from an example solution using Bootstrap. **Remember, you do not need to exactly match this example** (in fact, it is encouraged that you try to make something that looks even better).

**Login page**

![login-page.png](https://canvas.uw.edu/courses/1118281/files/43582424/preview)

**Sign up error message**

![signup-error.png](https://canvas.uw.edu/courses/1118281/files/43582422/preview)

**Login error message**

![login-error.png](https://canvas.uw.edu/courses/1118281/files/43582423/preview)

**Chat page (with two different users)**

![view-messages.png](https://canvas.uw.edu/courses/1118281/files/43582421/preview)

**Editing a message**

![edit-message.png](https://canvas.uw.edu/courses/1118281/files/43582420/preview)

## How to Submit your Assignment 

All code for this challenge must be committed to the **challenge6** branch in your repo. Push this branch to Github, open a pull request to your **master** branch (do not merge it yourself), and then submit the URL to your pull request on Canvas. In the description of your pull request, please include a link to your app on Firebase Hosting (or Github Pages), and please list any extra credit options you completed.

## Extra Credit

*   **Multiple chat channels (5 points)**: Add support for multiple chat channels. You must store these messages in a separate list, and you must provide controls for the user to switch between channels.
*   **1:1 messages (5 points):** Add support for two users to chat directly with each other.
*   **Rich text content (5 points max):** Add support for content such as formatting, emojis, images, links, audio, video, etc. <a href="https://github.com/jonschlinkert/remarkable" target="_blank">Remarkable</a> is an example of a JavaScript library to parse and render Markdown.
*   **User preferences (5 points):** Add a page that allows users to update information about their profile, including their display name, password, and email address.
*   **Styling (5 points max):** Style your app with more than just the default styling for your CSS framework.
*   **Currently logged in (5 points):** On the chat page, show a list of users who are currently viewing the page. If you are also doing 1:1 messages, clicking a user's name should start a 1:1 chat with them.

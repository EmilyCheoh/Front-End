/*
 * This file should contain code for the following tasks:
 * 1. Create a new account.
 * 2. Sign in an existing account.
 * 3. Redirect a user to chat.html once they are logged in/signed up.
 */

// Sign in form elements
var form = document.getElementById('login-form');
var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');
var loginError = document.getElementById('login-error');

var auth = firebase.auth();

// Helper function to set the login error message
function setLoginError(message) {
    loginError.textContent = message;
    loginError.classList.add('active');
}

// When the user logs in, send the email and password to firebase.
// Firebase will determine whether or not the user logged in correctly.
form.addEventListener('submit', function (e) {
    e.preventDefault();

    var email = emailInput.value;
    var password = passwordInput.value;

    // First, check that an email and password have been entered,
    // and if not, display an error message.
    if (!email || !password) {
        setLoginError('Email and password are required');
    } else {
        // If the login was successful, the .then callback will be called.
        // Otherwise, the .catch callback will be called,
        // with an error object containing the error message.
        auth.signInWithEmailAndPassword(email, password)
            .then(function (user) {

            })
            .catch(function (error) {
                setLoginError(error.message);
            });
    }
});

// Sign up form elements
var signUpForm = document.getElementById('signup-form');
var displayNameInput = document.getElementById('signup-name');
var signUpEmailInput = document.getElementById('signup-email');
var signUpPasswordInput = document.getElementById('signup-password');
var signUpPasswordConfirmInput = document.getElementById('signup-password-confirm');
var signupError = document.getElementById('signup-error');
var displayNameInput = document.getElementById('signup-name');

// Boolean to track whether or not a user has just click the button to sign in.
// This is so that we don't redirect the user who has justed sign up to the chat page
// before we complete updating their profile and sending them a verification email.
// If we redirect immediately after creating the account,
// the operations to update their profile and send a verification email
// may not get a chance to complete.
var isSigningUp = false;

// Helper function to set the sign up error message
function setSignUpError(message) {
    signupError.textContent = message;
    signupError.classList.add('active');
}

// Helper function to reset teh sign up error message
function clearSignupError() {
    signupError.textContent = '';
    signupError.classList.remove('active');
}

signUpForm.addEventListener('submit', function (e) {
    e.preventDefault();

    clearSignupError();

    isSigningUp = true;

    var email = signUpEmailInput.value;
    var password = signUpPasswordInput.value;
    var passwordConfirm = signUpPasswordConfirmInput.value;
    var displayNameValue = displayNameInput.value;

    var user = firebase.auth().currentUser;
    var photoURL = "https://www.gravatar.com/avatar/" + md5(email);



    // First, check that an email has been provided.
    if (!email) {
        setSignUpError('Email is required.');
    } else if (password !== passwordConfirm) {
        // Next, check the passwords match
        setSignUpError('Passwords do not match.');
    } else if (!displayNameValue) {
        setSignUpError('Display name is required.');
    } else {
        // First, create the user's account
        auth.createUserWithEmailAndPassword(email, password)
            .then(function (user) {
                user.updateProfile({
                    displayName: displayNameValue,
                    photoURL: photoURL
                })
                    .then(function () {
                        return user.sendEmailVerification();
                    })
                    .then(function () {
                        window.location.href = 'chat.html';
                    })
                    .catch(function (error) {
                        
                    });

            })
            .catch(function (error) {
                // Display error messages
                setSignUpError(error.message);
            });
    }
});
auth.onAuthStateChanged(function (user) {
    // We only want to redirect the user
    // in this callback if they have just signed in
    // or if they are returning to the page
    // and are already signed.
    if (user && !isSigningUp) {
        // User is logged in

        window.location.href = 'chat.html';
    }
});

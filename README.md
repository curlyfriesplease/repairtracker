# Repair Tracker

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup

### Create config file

1. Copy /src/config/constantsTemplate.js in the same folder, named constants.js

### Firebase Auth

https://console.firebase.google.com/?authuser=0

1. In the Firebase console, click Add project.
2. In the center of the Firebase console's project overview page, click the Web icon to launch the setup workflow.
3. If you've already added an app to your Firebase project, click Add app to display the platform options.
4. Enter your app's nickname. This nickname is an internal, convenience identifier and is only visible to you in the Firebase console.
5. Click Register app.
6. Look for the firebaseConfig, and copy the object into constants.js
7. In the Firebase console, open the Auth section.
8. On the Sign in method tab, enable the Google sign-in method and click Save. You will need to provide a project support email.

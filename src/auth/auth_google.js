// import { getAuth, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';

// // const provider = new GoogleAuthProvider();
// // const auth = getAuth();

// // signInWithRedirect(auth, provider)
// //   .then((result) => {
// //     // This gives you a Google Access Token. You can use it to access the Google API.
// //     const credential = GoogleAuthProvider.credentialFromResult(result);
// //     const token = credential.accessToken;
// //     // The signed-in user info.
// //     const user = result.user;
// //     // ...
// //   })
// //   .catch((error) => {
// //     // Handle Errors here.
// //     const errorCode = error.code;
// //     const errorMessage = error.message;
// //     // The email of the user's account used.
// //     const email = error.customData.email;
// //     // The AuthCredential type that was used.
// //     const credential = GoogleAuthProvider.credentialFromError(error);
// //     // ...
// //     window.alert(`Get cosy, it's errortime with grandma: ${errorMessage}`);
// //     console.log(`Error with firebase auth: ${errorMessage}`);
// //   });

// // getRedirectResult(auth)
// //   .then((result) => {
// //     // This gives you a Google Access Token. You can use it to access Google APIs.
// //     const credential = GoogleAuthProvider.credentialFromResult(result);
// //     const token = credential.accessToken;

// //     // The signed-in user info.
// //     const user = result.user;
// //   })
// //   .catch((error) => {
// //     // Handle Errors here.
// //     const errorCode = error.code;
// //     const errorMessage = error.message;
// //     // The email of the user's account used.
// //     const email = error.customData.email;
// //     // The AuthCredential type that was used.
// //     const credential = GoogleAuthProvider.credentialFromError(error);
// //     // ...
// //     window.alert(`Get cosy, it's errortime with grandma: ${errorMessage}`);
// //     console.log(`Error with firebase auth: ${errorMessage}`);
// //   });

// function toggleSignIn() {
//   if (!firebase.auth().currentUser) {
//     var provider = new firebase.auth.GoogleAuthProvider();
//     provider.addScope('https://www.googleapis.com/auth/plus.login');
//     firebase.auth().signInWithRedirect(provider);
//   } else {
//     firebase.auth().signOut();
//   }
//   document.getElementById('quickstart-sign-in').disabled = true;
// }

// /**
//  * initApp handles setting up UI event listeners and registering Firebase auth listeners:
//  *  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
//  *    out, and that is where we update the UI.
//  *  - firebase.auth().getRedirectResult(): This promise completes when the user gets back from
//  *    the auth redirect flow. It is where you can get the OAuth access token from the IDP.
//  **/

// export function initApp() {
//   // Result from Redirect auth flow.
//   firebase
//     .auth()
//     .getRedirectResult()
//     .then(function (result) {
//       if (result.credential) {
//         // This gives you a Google Access Token. You can use it to access the Google API.
//         var token = result.credential.accessToken;
//         document.getElementById('quickstart-oauthtoken').textContent = token;
//       } else {
//         document.getElementById('quickstart-oauthtoken').textContent = 'null';
//       }
//       // The signed-in user info.
//       var user = result.user;
//     })
//     .catch(function (error) {
//       // Handle Errors here.
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       // The email of the user's account used.
//       var email = error.email;
//       // The firebase.auth.AuthCredential type that was used.
//       var credential = error.credential;
//       if (errorCode === 'auth/account-exists-with-different-credential') {
//         alert(
//           'You have already signed up with a different auth provider for that email.'
//         );
//         // If you are using multiple auth providers on your app you should handle linking
//         // the user's accounts here.
//       } else {
//         console.error(error);
//       }
//     });

//   // Listening for auth state changes.
//   firebase.auth().onAuthStateChanged(function (user) {
//     if (user) {
//       // User is signed in.
//       var displayName = user.displayName;
//       var email = user.email;
//       var emailVerified = user.emailVerified;
//       var photoURL = user.photoURL;
//       var isAnonymous = user.isAnonymous;
//       var uid = user.uid;
//       var providerData = user.providerData;
//       document.getElementById('quickstart-sign-in-status').textContent =
//         'Signed in';
//       document.getElementById('quickstart-sign-in').textContent = 'Sign out';
//       document.getElementById('quickstart-account-details').textContent =
//         JSON.stringify(user, null, '  ');
//     } else {
//       // User is signed out.
//       document.getElementById('quickstart-sign-in-status').textContent =
//         'Signed out';
//       document.getElementById('quickstart-sign-in').textContent =
//         'Sign in with Google';
//       document.getElementById('quickstart-account-details').textContent =
//         'null';
//       document.getElementById('quickstart-oauthtoken').textContent = 'null';
//     }
//     document.getElementById('quickstart-sign-in').disabled = false;
//   });
// }

// export const GoogleSigninComponent = () => {
//   const a = 1;
//   return (
//     <div class="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-header">
//       {/* <!-- Header section containing title --> */}
//       <header class="mdl-layout__header mdl-color-text--white mdl-color--light-blue-700">
//         <div class="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-grid">
//           <div class="mdl-layout__header-row mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--8-col-desktop">
//             <a href="/">
//               <h3>Firebase Authentication</h3>
//             </a>
//           </div>
//         </div>
//       </header>

//       <main class="mdl-layout__content mdl-color--grey-100">
//         <div class="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-grid">
//           {/* <!-- Container for the demo --> */}
//           <div class="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--12-col-desktop">
//             <div class="mdl-card__title mdl-color--light-blue-600 mdl-color-text--white">
//               <h2 class="mdl-card__title-text">
//                 Google Authentication with Redirect
//               </h2>
//             </div>
//             <div class="mdl-card__supporting-text mdl-color-text--grey-600">
//               <p>Sign in with your Google account below.</p>

//               {/* <!-- Button that handles sign-in/sign-out --> */}
//               <button
//                 disabled
//                 class="mdl-button mdl-js-button mdl-button--raised"
//                 id="quickstart-sign-in"
//                 onClick={toggleSignIn}
//               >
//                 Sign in with Google
//               </button>

//               {/* <!-- Container where we'll display the user details --> */}
//               <div class="quickstart-user-details-container">
//                 Firebase sign-in status:{' '}
//                 <span id="quickstart-sign-in-status">Unknown</span>
//                 <div>
//                   Firebase auth <code>currentUser</code> object value:
//                 </div>
//                 <pre>
//                   <code id="quickstart-account-details">null</code>
//                 </pre>
//                 <div>Google OAuth Access Token:</div>
//                 <pre>
//                   <code id="quickstart-oauthtoken">null</code>
//                 </pre>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

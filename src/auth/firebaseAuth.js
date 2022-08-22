import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
});

export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
  auth
    .signInWithRedirect(googleProvider)
    .then((res) => {
      console.log(`🔑 🔑 🔑 Google Auth user: ${res.user}`);
    })
    .catch((error) => {
      console.log(
        `⛔ ⛔ ⛔ Settle down for error time with Grandma: ${error.message}`
      );
    });
};

export const googleLogOut = () => {
  auth
    .signOut()
    .then(() => {
      console.log('👋 👋 👋 logged out');
    })
    .catch((error) => {
      console.log(
        `⛔ ⛔ ⛔ Settle down for error time with Grandma: ${error.message}`
      );
    });
};

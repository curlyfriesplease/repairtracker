import React, { useEffect, useContext, useState } from 'react';
// import './Login.css';
import { signInWithGoogle } from '../auth/firebaseAuth';
import { UserContext } from '../providers/UserProvider';
import { Navigate } from 'react-router-dom';
import { googleLogOut } from '../auth/firebaseAuth';

export default function Login() {
  const user = useContext(UserContext);
  const [redirect, setredirect] = useState(null);

  useEffect(() => {
    if (user) {
      console.log('User is logged in, redirecting to the list.');
      setredirect('/list');
    }
  }, [user]);

  if (redirect) {
    <Navigate to={redirect} />;
  }

  return (
    <div className="login-buttons">
      <button
        className="login-provider-button googleSSObutton"
        onClick={signInWithGoogle}
      >
        <div id="login">
          <img
            src="https://img.icons8.com/ios-filled/50/000000/google-logo.png"
            alt="google icon"
          />
          <span> Login</span>
        </div>
      </button>
    </div>
  );
}

export const Logout = (user) => {
  return (
    <button className="logout-button googleSSObutton" onClick={googleLogOut}>
      <div id="logout">
        <img
          src="https://img.icons8.com/ios-filled/50/000000/google-logo.png"
          alt="google icon"
        />
        <span>logout</span>
      </div>
    </button>
  );
};

export const LoggedInUser = (user) => {
  const { photoURL, displayName } = user.user;
  return (
    <div id="loggedInAsDetails">
      <img src={photoURL} id="profilePicture" />
      <h3>{displayName}</h3>
    </div>
  );
};

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
      setredirect('/list');
    }
  }, [user]);
  if (redirect) {
    <Navigate to={redirect} />;
  }
  return (
    <div className="login-buttons">
      <button className="login-provider-button" onClick={signInWithGoogle}>
        <img
          src="https://img.icons8.com/ios-filled/50/000000/google-logo.png"
          alt="google icon"
        />
        <span> Continue with Google</span>
      </button>
    </div>
  );
}

export const Logout = () => {
  return (
    <button className="logout-button" onClick={googleLogOut}>
      <img
        src="https://img.icons8.com/ios-filled/50/000000/google-logo.png"
        alt="google icon"
      />
      <span> logout</span>
    </button>
  );
};

export const LoggedInUser = (user) => {
  const { photoURL, displayName } = user.user;
  return (
    <span>
      Logged in as:
      <img src={photoURL} />
      <h3>{displayName}</h3>
    </span>
  );
};

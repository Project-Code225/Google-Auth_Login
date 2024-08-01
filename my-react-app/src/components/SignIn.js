// src/components/SignIn.js

import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../components/firebaseConfig';
import './SignIn.css'; // Import the CSS file for styling

const SignIn = () => {
  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      console.log("User signed in successfully");
    } catch (error) {
      console.error("Error signing in: ", error);
    }
  };

  return (
    <div className="sign-in-container">
      <button onClick={handleSignIn} className="sign-in-button">
        Sign In with Google
      </button>
    </div>
  );
};

export default SignIn;

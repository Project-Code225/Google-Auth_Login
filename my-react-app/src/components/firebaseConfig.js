// src/firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqEyGMQpT62YrOMgpu8Nob2hl5IbhrPQI",
  authDomain: "aviralteam-ad10d.firebaseapp.com",
  projectId: "aviralteam-ad10d",
  storageBucket: "aviralteam-ad10d.appspot.com",
  messagingSenderId: "551164246682",
  appId: "1:551164246682:web:9ba783ece24e82f4963d23",
  measurementId: "G-TF8XKF7VEV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };

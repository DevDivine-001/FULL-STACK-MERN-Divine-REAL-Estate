// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  apiKey:  import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "divine-mern-real-estate.firebaseapp.com",
  projectId: "divine-mern-real-estate",
  storageBucket: "divine-mern-real-estate.appspot.com",
  messagingSenderId: "985487175118",
  appId: "1:985487175118:web:66c5245ba04dc17ed9cf9f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
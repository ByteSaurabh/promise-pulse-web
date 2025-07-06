// src/firebase.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_ZdrLNlpltPoNhky9AqX5QK3TOHY28KE",
  authDomain: "promise-pulse-863ec.firebaseapp.com",
  projectId: "promise-pulse-863ec",
  storageBucket: "promise-pulse-863ec.firebasestorage.app",
  messagingSenderId: "827850478056",
  appId: "1:827850478056:web:ad01a6dc2669701840d45d",
  measurementId: "G-G8CZY4N5M4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtLlS71Xz_icQ1UFdqCrjt2iv3Bsd8J1k",
  authDomain: "mern-book-inventory-2220d.firebaseapp.com",
  projectId: "mern-book-inventory-2220d",
  storageBucket: "mern-book-inventory-2220d.appspot.com",
  messagingSenderId: "10687563130",
  appId: "1:10687563130:web:6828c16c46df3bc09242c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS9Gj8QxZMbJ6Blb-ptErj3JEatmc-mZw",
  authDomain: "fir-auth-60264.firebaseapp.com",
  projectId: "fir-auth-60264",
  storageBucket: "fir-auth-60264.appspot.com",
  messagingSenderId: "1095907421243",
  appId: "1:1095907421243:web:7c3ac56fdf556b825a801e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// app has the complete authentication of firebase.
export const auth = getAuth(app);

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyALeOGbExnjNn2TtkO0GrPOxfk_Bdpiah4",

  authDomain: "teste-8ec5e.firebaseapp.com",

  projectId: "teste-8ec5e",

  storageBucket: "teste-8ec5e.appspot.com",

  messagingSenderId: "432086892544",

  appId: "1:432086892544:web:3c6e8e665d4f21df4d98e5"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore();
export { db }
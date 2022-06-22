// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {Firestore, getFirestore} from "firebase/firestore"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRs4hMRx_vxakfjOLGXhUue1mK2TcbucM",
  authDomain: "teste1-2528a.firebaseapp.com",
  projectId: "teste1-2528a",
  storageBucket: "teste1-2528a.appspot.com",
  messagingSenderId: "579409900057",
  appId: "1:579409900057:web:2a6fcbf2fe8b496aa0b088",
  measurementId: "G-JVYCR2ERXY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export { db }
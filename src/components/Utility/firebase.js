// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import {getAuth} from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
 




const firebaseConfig = {
  apiKey: "AIzaSyD7L3cxPGmkmWU10YD_2-bGPo-v0dzjboM",
  authDomain: "clone-b9284.firebaseapp.com",
  projectId: "clone-b9284",
  storageBucket: "clone-b9284.firebasestorage.app",
  messagingSenderId: "76682161259",
  appId: "1:76682161259:web:952a76a024e628295e152e",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app); // Use Firebase compat Auth
export const db = firebase.firestore(); // Use Firebase compat Firestore




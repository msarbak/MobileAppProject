// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVDQjPOdBtwQd1enrkUQKKgwONoFUGrWs",
  authDomain: "mobiluygulama-8d1fe.firebaseapp.com",
  projectId: "mobiluygulama-8d1fe",
  storageBucket: "mobiluygulama-8d1fe.appspot.com",
  messagingSenderId: "868327885540",
  appId: "1:868327885540:web:e2dadc9aba92aee5cf3af1"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_AouzYzock46aob6vc9Dgs-dYr_wQAHs",
  authDomain: "instagram-clone-react-b8cbc.firebaseapp.com",
  projectId: "instagram-clone-react-b8cbc",
  storageBucket: "instagram-clone-react-b8cbc.appspot.com",
  messagingSenderId: "865728125872",
  appId: "1:865728125872:web:ac0c0190ff033392785475",
  measurementId: "G-DR0PKY8E81"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration, replace it with your project keys
const firebaseConfig = {
  apiKey: "AIzaSyB5B8sg79MkG-dCoIzhIgwiXoatV8MEhCI",
  authDomain: "codepathchlg.firebaseapp.com",
  projectId: "codepathchlg",
  storageBucket: "codepathchlg.appspot.com",
  messagingSenderId: "890863911004",
  appId: "1:890863911004:web:18386d79254c4043dce699",
  measurementId: "G-J10XEN0F9X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
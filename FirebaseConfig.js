// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBDz7i90VdSWknx4HbRT8fLDLjQIHPVyU",
  authDomain: "studit-ce1cb.firebaseapp.com",
  projectId: "studit-ce1cb",
  storageBucket: "studit-ce1cb.appspot.com",
  messagingSenderId: "788442431808",
  appId: "1:788442431808:web:f717ff6a6f421b49a47aa5"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
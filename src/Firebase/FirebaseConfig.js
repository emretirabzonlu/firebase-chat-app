// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALhe_d6WBlDy6qj3UeBo0Cvk4RdMiQxng",
  authDomain: "chatrooms-944d3.firebaseapp.com",
  projectId: "chatrooms-944d3",
  storageBucket: "chatrooms-944d3.appspot.com",
  messagingSenderId: "87162156616",
  appId: "1:87162156616:web:8c84bb2ede15b403724a7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);

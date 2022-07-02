// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHUNmLUSuZCLOQrtSgtUZaPSDjU0GxNdA",
  authDomain: "app-vera31865.firebaseapp.com",
  projectId: "app-vera31865",
  storageBucket: "app-vera31865.appspot.com",
  messagingSenderId: "16485835655",
  appId: "1:16485835655:web:b07b5aa0f019ad12276922"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
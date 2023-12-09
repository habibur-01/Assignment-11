// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  // apiKey: "AIzaSyBvhHzfldSfAstDPhUVMEgt9_MCyWp8PKY",
  // authDomain: "hotel-management-ad623.firebaseapp.com",
  // projectId: "hotel-management-ad623",
  // storageBucket: "hotel-management-ad623.appspot.com",
  // messagingSenderId: "367019962633",
  // appId: "1:367019962633:web:1900ffafc2b221356963d8"

  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
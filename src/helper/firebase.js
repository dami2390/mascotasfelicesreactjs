// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNe9sfcMxOxzI_GQivzO1fJ1neQyyKUy0",
  authDomain: "mascotasfelicesreactjs.firebaseapp.com",
  projectId: "mascotasfelicesreactjs",
  storageBucket: "mascotasfelicesreactjs.appspot.com",
  messagingSenderId: "138289285421",
  appId: "1:138289285421:web:6b2e72561c02a4acc1aba4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
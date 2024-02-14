// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsBD7NbTX1Qk3WQP4vBW9vhxkBDkI68tQ",
  authDomain: "react-notes-scrimba-70126.firebaseapp.com",
  projectId: "react-notes-scrimba-70126",
  storageBucket: "react-notes-scrimba-70126.appspot.com",
  messagingSenderId: "892668238092",
  appId: "1:892668238092:web:7d7d8631acda003cb79129"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")

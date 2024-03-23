// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATUyciHv0-sJVBLRYTfYHDEpGylqk8KJ8",
  authDomain: "epsilon-411216.firebaseapp.com",
  projectId: "epsilon-411216",
  storageBucket: "epsilon-411216.appspot.com",
  messagingSenderId: "50869121335",
  appId: "1:50869121335:web:c1faedc5d6542fcd7a6ab2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

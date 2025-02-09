import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATUyciHv0-sJVBLRYTfYHDEpGylqk8KJ8",
  projectId: "epsilon-411216",
  appId: "1:50869121335:web:c1faedc5d6542fcd7a6ab2",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

import { db } from "@lib/firebaseSdk";
import { collection, getDocs } from "firebase/firestore";

export const getFirebaseData = async (docId) => {
  try {
    const snapshot = await getDocs(collection(db, docId));
    if (snapshot) {
      if (!snapshot.empty) {
        return snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      }
    }
  } catch (error) {
    return console.log(error);
  }
};

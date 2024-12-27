import { db } from "@/lib/firebaseSdk";
import { collection, getDocs, query, where } from "firebase/firestore";

export const getFirebaseData = async (
  docId,
  subCollection,
  collectionName,
  key,
  value
) => {
  try {
    let snapshot;
    if (subCollection && collectionName) {
      const colRef = collection(db, docId, subCollection, collectionName);
      const constraints = [];
      if (key && value) {
        constraints.push(where(key, "==", value));
      }
      const queryRef = query(colRef, ...constraints);
      snapshot = await getDocs(queryRef);
    } else {
      snapshot = await getDocs(collection(db, docId));
    }
    if (snapshot) {
      if (snapshot.empty) return [];
      else
        return snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
    }
    return [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

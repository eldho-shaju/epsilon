import { db } from "@/lib/firebaseSdk";
import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";

export const getFirebaseData = async (
  collectionName,
  docID,
  subCollection,
  key
) => {
  try {
    let snapshot;
    if (docID && subCollection && !key) {
      const colRef = collection(db, collectionName, docID, subCollection);
      snapshot = await getDocs(query(colRef));
    } else if (docID && subCollection && key) {
      const docRef = doc(db, collectionName, docID);
      const subDocRef = doc(docRef, subCollection, key);
      const subDocSnap = await getDoc(subDocRef);
      if (subDocSnap.exists()) {
        return subDocSnap.data();
      } else {
        return {};
      }
    } else {
      snapshot = await getDocs(collection(db, collectionName));
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

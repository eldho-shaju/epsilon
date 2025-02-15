import { db } from "@/lib/firebaseSdk";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
} from "firebase/firestore";

export const getFirebaseData = async ({
  collectionName,
  docID,
  subCollection,
  key,
  size,
}) => {
  try {
    let snapshot;
    let lastVisible;
    if (docID && subCollection && !key) {
      const colRef = collection(db, collectionName, docID, subCollection);
      snapshot = await getDocs(query(colRef), limit(size));
      lastVisible = snapshot.docs[snapshot.docs.length - 1];
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
      if (snapshot.empty) {
        return { data: [] };
      } else {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        return {
          data,
          lastVisible,
        };
      }
    }
    return { data: [] };
  } catch (error) {
    console.log(error);
    return { data: [] };
  }
};

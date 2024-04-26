import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseSdk";

const useGetData = () => {
  const getData = async (docId) => {
    let data = [];
    try {
      const subCollection = await getDocs(collection(db, docId));
      if (subCollection) {
        if (!subCollection.empty) {
          subCollection.forEach((doc) => {
            return (data = [...data, doc?.data()]);
          });
        }
      }
    } catch (error) {
      return Promise.reject(error);
    }

    return data;
  };

  return { getData };
};

export default useGetData;

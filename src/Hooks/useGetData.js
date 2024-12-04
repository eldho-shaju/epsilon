import { db } from "@lib/firebaseSdk";
import { collection, getDocs } from "firebase/firestore";

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
      return console.log(error);
    }

    return data;
  };

  return { getData };
};

export default useGetData;

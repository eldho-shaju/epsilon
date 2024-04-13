import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseSdk";
import {
  getFromLocalStorage,
  setToLocalStorage,
} from "../../functions/localStorage";

const useProductTypes = () => {
  const cachedData = JSON.parse(getFromLocalStorage("productTypes"));
  const [data, setData] = useState(cachedData || []);
  const dataLength = data?.length > 0;
  const [loading, setLoading] = useState(!!dataLength === false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let productTypes = [];
        const querySnapshot = await getDocs(collection(db, "product-type"));

        if (querySnapshot?.empty) {
          setError(true);
        } else {
          querySnapshot.forEach((doc) => {
            productTypes = [...productTypes, doc.data()];
          });
          setData(productTypes);
          setToLocalStorage("productTypes", productTypes);
        }
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, loading, error };
};

export default useProductTypes;

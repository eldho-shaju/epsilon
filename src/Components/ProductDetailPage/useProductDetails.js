import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebaseSdk";
import {
  getFromLocalStorage,
  setToLocalStorage,
} from "../../functions/localStorage";

const useProductDetails = () => {
  const { type, detail } = useParams();
  const url_key = detail.replace(/:/g, "");
  const cachedData = JSON.parse(getFromLocalStorage(`${url_key}`));
  const [data, setData] = useState(cachedData || []);
  const dataLength = data?.length > 0;
  const [loading, setLoading] = useState(!!dataLength === false);
  const [error, setError] = useState(false);

  const productType = type.replace(/:/g, "");

  useEffect(() => {
    async function fetchData() {
      try {
        let data = [];
        const querySnapshot = await getDocs(
          query(
            collection(db, "product_details", productType, "type"),
            where("urlKey", "==", url_key)
          )
        );
        if (querySnapshot?.empty) {
          setError(true);
        } else {
          querySnapshot.forEach((doc) => {
            data = [...data, doc?.data()];
          });
          setData(data);
          setToLocalStorage(`${url_key}`, data);
        }
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return { data, loading, error };
};

export default useProductDetails;

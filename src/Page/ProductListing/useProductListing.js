import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebaseSdk";
import {
  getFromLocalStorage,
  setToLocalStorage,
} from "../../functions/localStorage";

const useProductListing = () => {
  const { type } = useParams();
  const subCollection = type && type.replace(/:/g, "");
  const cachedData = JSON.parse(
    getFromLocalStorage(`product-list_${subCollection}`)
  );
  const [data, setData] = useState(cachedData || []);
  const dataLength = data?.length > 0;
  const [loading, setLoading] = useState(!!dataLength === false);
  const [error, setError] = useState(false);

  function formatText(subCollection) {
    let cleanedText = subCollection && subCollection?.replace(/[-]/g, " ");
    return cleanedText;
  }

  const formattedText = subCollection && formatText(subCollection);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let listingData = [];
        const querySnapshot = await getDocs(
          query(
            collection(db, "product-list"),
            where("productType", "==", subCollection)
          )
        );
        if (querySnapshot?.empty) {
          setError(true);
        } else {
          querySnapshot.forEach((doc) => {
            listingData = [...listingData, doc.data()];
          });
          setData(listingData);
          setToLocalStorage(`product-list_${subCollection}`, listingData);
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

  return { data, loading, error, formattedText };
};

export default useProductListing;

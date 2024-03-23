import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebaseSdk";
import { useLocation, useParams } from "react-router-dom";

const useProducts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const location = useLocation();
  const { type } = useParams();

  let currentPage;
  if (location.pathname === "/product-type") {
    currentPage = "product-type";
  } else if (type) {
    currentPage = "product-list";
  }

  function formatText(subCollection) {
    let cleanedText = subCollection.replace(/[-]/g, " ");
    return cleanedText;
  }

  const subCollection = type && type.replace(/:/g, "");
  const formattedText = subCollection && formatText(subCollection);
  const isProductTypeListing = location.pathname === "/product-type";

  useEffect(() => {
    async function fetchData() {
      setError(false);
      setData([]);
      try {
        const querySnapshot = await getDocs(
          query(
            collection(db, currentPage),
            currentPage === "product-list"
              ? where("productType", "==", subCollection)
              : ""
          )
        );

        querySnapshot.forEach((doc) => {
          setData((prevData) => [...prevData, { id: doc?.id, ...doc.data() }]);
          setLoading(false);
          if (!!doc.data() === false) {
            setError(true);
            setLoading(false);
          }
        });
        if (querySnapshot?.empty) {
          setError(true);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setError(true);
        setLoading(false);
      }
    }
    if (!!currentPage) fetchData();
  }, [currentPage]);

  return { data, loading, error, isProductTypeListing, formattedText };
};

export default useProducts;

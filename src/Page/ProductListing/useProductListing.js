import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../firebaseSdk";
import { formatText } from "../../functions/formatText";

const useProductListing = () => {
  const { type } = useParams();
  const subCollection = type && type.replace(/:/g, "");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const formattedText = subCollection && formatText(subCollection);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let listingData = [];
        const querySnapshot = await getDocs(
          query(collection(db, "product-list", subCollection, "content"))
        );
        if (querySnapshot?.empty) {
          setError(true);
        } else {
          querySnapshot.forEach((doc) => {
            listingData = [...listingData, doc.data()];
          });
          setData(listingData);
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

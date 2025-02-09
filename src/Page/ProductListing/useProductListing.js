import { useEffect, useState } from "react";
import { formatText } from "@/utils/formatText";
import { getFirebaseData } from "@/utils/getFirebaseData";

const useProductListing = ({ subCollection }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const formattedText = subCollection && formatText(subCollection);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFirebaseData(
          "product-listing",
          subCollection,
          "content"
        );
        setData(data);
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

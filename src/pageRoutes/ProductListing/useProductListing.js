import { useEffect, useState } from "react";
import { formatText } from "@/utils/formatText";
import { getFirebaseData } from "@/utils/getFirebaseData";

const useProductListing = ({ docID }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const formattedText = docID && formatText(docID);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, lastVisible } = await getFirebaseData({
          collectionName: "product-listing",
          docID,
          subCollection: "content",
          size: 10,
        });
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

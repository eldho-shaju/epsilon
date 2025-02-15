import { useEffect, useState } from "react";
import { getFirebaseData } from "@/utils/getFirebaseData";

const useProductTypes = () => {
  const [data, setData] = useState([]);
  const dataLength = data?.length > 0;
  const [loading, setLoading] = useState(!!dataLength === false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: productTypes } = await getFirebaseData({
          collectionName: "product-type",
        });
        if (productTypes) {
          setData(productTypes);
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

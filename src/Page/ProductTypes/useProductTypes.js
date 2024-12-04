import { useEffect, useState } from "react";
import {
  getFromLocalStorage,
  setToLocalStorage,
} from "../../functions/localStorage";
import useGetData from "../../hooks/useGetData";

const useProductTypes = () => {
  const { getData } = useGetData();
  const cachedData = JSON.parse(getFromLocalStorage("productTypes"));
  const [data, setData] = useState(cachedData || []);
  const dataLength = data?.length > 0;
  const [loading, setLoading] = useState(!!dataLength === false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productTypes = await getData("product-type");
        if (productTypes) {
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

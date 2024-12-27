import { useEffect, useState } from "react";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/localStorage";
import { getFirebaseData } from "@/utils/getFirebaseData";
import { useSearchParams } from "next/navigation";

const useProductDetails = ({ url_key }) => {
  console.log(url_key);
  const searchParams = useSearchParams();
  const type = searchParams.get("type") || "";
  const cachedData = JSON.parse(getFromLocalStorage(`${url_key}`));
  const [data, setData] = useState(cachedData || []);
  const dataLength = data?.length > 0;
  const [loading, setLoading] = useState(!!dataLength === false);
  const [error, setError] = useState(false);

  const productType = type?.replace(/:/g, "");

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getFirebaseData(
          "product_details",
          productType,
          "type",
          "urlKey",
          url_key
        );
        setData(data);
        setToLocalStorage(`${url_key}`, data);
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

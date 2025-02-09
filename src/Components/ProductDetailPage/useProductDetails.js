import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/localStorage";
import { getFirebaseData } from "@/utils/getFirebaseData";
import { isEmptyObj } from "@/utils/isEmptyObj";

const useProductDetails = ({ url_key }) => {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") || "";
  // const cachedData = JSON.parse(getFromLocalStorage(`${url_key}`));
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const productType = type?.replace(/-/g, " ");

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getFirebaseData(
          "product_details",
          type,
          "type",
          url_key
        );

        if (isEmptyObj(data)) {
          setError(true);
        } else {
          setItem(data);
        }
        // setToLocalStorage(`${url_key}`, data);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return { item, loading, error, type, productType };
};

export default useProductDetails;

import { useEffect, useState } from "react";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/localStorage";
import { getFirebaseData } from "@/utils/getFirebaseData";

const useContact = () => {
  // const cachedData = JSON.parse(getFromLocalStorage(`contactUs`));
  const [data, setData] = useState([]);
  const dataLength = data?.length > 0;
  const [loading, setLoading] = useState(!!dataLength === false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getFirebaseData({ collectionName: "contact" });
        if (data) {
          setData(data);
        }
      } catch (e) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (!!dataLength === false) fetchData();
  }, []);

  return { data, loading, error };
};

export default useContact;

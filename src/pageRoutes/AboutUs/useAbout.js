import { useEffect, useState } from "react";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/localStorage";
import { getFirebaseData } from "@/utils/getFirebaseData";

const useAbout = () => {
  // const cachedData = JSON.parse(getFromLocalStorage(`aboutUs`));
  const [data, setData] = useState([]);
  const dataLength = data?.length > 0;
  const [loading, setLoading] = useState(!!dataLength === false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getFirebaseData({ collectionName: "about" });

        if (data) {
          setData(data);
          // setToLocalStorage(`aboutUs`, data);
        }
      } catch (err) {
        console.log("Error fetching about data:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, loading, error };
};

export default useAbout;

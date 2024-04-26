import { useEffect, useState } from "react";
import {
  getFromLocalStorage,
  setToLocalStorage,
} from "../../functions/localStorage";
import useGetData from "../../Hooks/useGetData";

const useAbout = () => {
  const { getData } = useGetData();
  const cachedData = JSON.parse(getFromLocalStorage(`aboutUs`));
  const [data, setData] = useState(cachedData || []);
  const dataLength = data?.length > 0;
  const [loading, setLoading] = useState(!!dataLength === false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData("about");
        if (data) {
          setData(data);
          setToLocalStorage(`aboutUs`, data);
        }
      } catch (err) {
        console.error("Error fetching about data:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (!!dataLength === false) fetchData();
  }, []);

  return { data, loading, error };
};

export default useAbout;

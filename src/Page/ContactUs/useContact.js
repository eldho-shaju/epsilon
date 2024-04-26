import { useEffect, useState } from "react";
import {
  getFromLocalStorage,
  setToLocalStorage,
} from "../../functions/localStorage";
import useGetData from "../../Hooks/useGetData";

const useContact = () => {
  const { getData } = useGetData();
  const cachedData = JSON.parse(getFromLocalStorage(`contactUs`));
  const [data, setData] = useState(cachedData || []);
  const dataLength = data?.length > 0;
  const [loading, setLoading] = useState(!!dataLength === false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData("contact");
        if (data) {
          setData(data);
          setToLocalStorage(`contactUs`, data);
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

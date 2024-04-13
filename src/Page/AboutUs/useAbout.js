import { useEffect, useState, useRef } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseSdk";
import {
  getFromLocalStorage,
  setToLocalStorage,
} from "../../functions/localStorage";

const useAbout = () => {
  const cachedData = JSON.parse(getFromLocalStorage(`aboutUs`));
  const [data, setData] = useState(cachedData || []);
  const dataLength = data?.length > 0;
  const [loading, setLoading] = useState(!!dataLength === false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = [];
        const querySnapshot = await getDocs(collection(db, "about"));
        querySnapshot.forEach((doc) => {
          data = [...data, doc.data()];
        });
        setData(data);
        setToLocalStorage(`aboutUs`, data);
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

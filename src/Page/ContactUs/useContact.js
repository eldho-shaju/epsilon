import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseSdk";
import {
  getFromLocalStorage,
  setToLocalStorage,
} from "../../functions/localStorage";

const useContact = () => {
  const cachedData = JSON.parse(getFromLocalStorage(`contactUs`));
  const [data, setData] = useState(cachedData || []);
  const dataLength = data?.length > 0;
  const [loading, setLoading] = useState(!!dataLength === false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = [];
        const querySnapshot = await getDocs(collection(db, "contact"));
        if (querySnapshot?.empty) {
          setError(true);
        } else {
          querySnapshot.forEach((doc) => {
            data = [...data, doc?.data()];
          });
        }
        setData(data);
        setToLocalStorage(`contactUs`, data);
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

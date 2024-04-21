import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseSdk";
import {
  getFromLocalStorage,
  setToLocalStorage,
} from "../../functions/localStorage";

const useHome = () => {
  const cachedData = JSON.parse(getFromLocalStorage(`homeWidgets`));
  const [widget, setWidget] = useState(cachedData || []);
  const dataLength = widget?.length > 0;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let widgetData = [];
        const subCollection = await getDocs(collection(db, "homeWidgets"));
        subCollection.forEach((doc) => {
          widgetData = [...widgetData, doc?.data()];
        });
        setWidget(widgetData);
        setToLocalStorage("homeWidgets", widgetData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    if (!!dataLength) {
      setLoading(false);
    } else {
      fetchData();
    }
  }, []);

  const banner =
    widget &&
    widget?.length > 0 &&
    widget?.find((ele) => ele?.type === "banner");

  const grid =
    widget &&
    widget?.length > 0 &&
    widget?.find((ele) => ele?.type === "four-grid");

  return { grid, banner, loading, error };
};

export default useHome;

import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebaseSdk";
import { HOME_WIDGET } from "../../Constants/Constants";

const useHome = () => {
  const [widget, setWidget] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const subCollection = await getDocs(collection(db, HOME_WIDGET));

        subCollection.forEach(async (doc) => {
          if (!!doc.data()) {
            setWidget((prevState) => [...prevState, doc.data()]);
          } else {
            setError(true);
          }
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(true);
      }
    }
    fetchData();
  }, []);

  const banner =
    widget &&
    widget?.length > 0 &&
    widget?.filter((ele) => ele?.type === "banner");

  const grid =
    widget &&
    widget?.length > 0 &&
    widget?.filter((ele) => ele?.type === "four-grid");

  return { grid, banner, loading, error };
};

export default useHome;

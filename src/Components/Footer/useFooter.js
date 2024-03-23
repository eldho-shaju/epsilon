import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebaseSdk";

const useFooter = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    setData([]);
    async function fetchData() {
      try {
        const querySnapshot = await getDocs(collection(db, "footer"));
        querySnapshot.forEach((doc) => {
          // console.log("======", doc.data());
          setData((prevData) => [...prevData, doc.data()]);
        });
      } catch (e) {
        console.log("======", e);
        setError(true);
      }
    }
    fetchData();
  }, []);

  return { data, error };
};

export default useFooter;

import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebaseSdk";

const useContact = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setData([]);
    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, "contact"));
      querySnapshot.forEach((doc) => {
        // console.log("======", doc.data());
        setData((prevData) => [...prevData, doc.data()]);
        setLoading(false);
        if (!!doc.data() === false) {
          setError(true);
        }
      });
    }
    fetchData();
  }, []);

  return { data, loading, error };
};

export default useContact;

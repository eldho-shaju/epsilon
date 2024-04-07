import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebaseSdk";

const useFooter = () => {
  const [footerData, setFooterData] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    setFooterData([]);
    async function fetchData() {
      try {
        let data = {};
        const querySnapshot = await getDocs(collection(db, "footer"));
        querySnapshot.forEach((doc) => {
          data = { ...data, [doc?.id]: { ...doc.data() } };
        });
        setFooterData(data);
      } catch (e) {
        console.log("======", e);
        setError(true);
      }
    }
    fetchData();
  }, []);

  if (error) return null;

  const { phone, social, address } = footerData && footerData;

  return { phone, social, address, error };
};

export default useFooter;

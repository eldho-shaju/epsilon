import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { useSetRecoilState } from "recoil";
import { contactNoAtom } from "../../Recoil/contactNoAtom";
import { db } from "../../firebaseSdk";

const useFooter = () => {
  const [footerData, setFooterData] = useState({});
  const [error, setError] = useState(false);
  const setPrimaryNumber = useSetRecoilState(contactNoAtom);

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
        getPrimaryNumber(data?.phone);
      } catch (e) {
        console.log(e);
        setError(true);
      }
    }
    fetchData();
  }, []);

  const getPrimaryNumber = (phone) => {
    if (phone && phone?.contents && phone?.contents?.length > 0) {
      const primaryData =
        phone?.contents?.find((data) => data?.preference === "primary") || {};
      if (primaryData) {
        const primaryNumber = primaryData?.link?.replace("+", "");
        if (primaryNumber) setPrimaryNumber(primaryNumber);
      }
    }
  };

  const { phone, social, address } = footerData && footerData;

  return { phone, social, address, error };
};

export default useFooter;

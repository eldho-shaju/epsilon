import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { useSetRecoilState } from "recoil";
import { contactNoAtom } from "@/recoil/contactNoAtom";
import { db } from "@/lib/firebaseSdk";

const useFooter = () => {
  const [footerData, setFooterData] = useState([]);
  const setPrimaryNumber = useSetRecoilState(contactNoAtom);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "footer"));
        const docs = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFooterData((prev) => [...prev, ...docs]);
      } catch (e) {
        console.log(e);
        setFooterData((prev) => [...prev, []]);
      }
    };

    const fetchHeaderData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "header"));
        const docs = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFooterData((prev) => [...prev, { id: "header", header: docs }]);
      } catch (e) {
        console.log(e);
        setFooterData((prev) => [...prev, []]);
      }
    };
    fetchData();
    fetchHeaderData();
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

  return { footerData };
};

export default useFooter;

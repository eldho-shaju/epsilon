import { useNavigate, useParams } from "react-router-dom";
import useToggle from "../../Hooks/useToggle";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebaseSdk";

const useProductDetails = () => {
  const { type, detail } = useParams();
  const { state, handleClose, handleOpen } = useToggle();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const productType = type.replace(/:/g, "");
  const url_key = detail.replace(/:/g, "");

  useEffect(() => {
    handleOpen();
    setData([]);
    async function fetchData() {
      try {
        const querySnapshot = await getDocs(
          query(
            collection(db, "product_details", productType, "type"),
            where("urlKey", "==", url_key)
          )
        );

        querySnapshot.forEach((doc) => {
          setData((prevData) => [...prevData, doc.data()]);
          setLoading(false);
        });
        if (querySnapshot?.empty) {
          setError(true);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setError(true);
        setLoading(false);
      }
    }
    fetchData();
    return () => {
      handleClose();
    };
  }, []);

  const handleCloseModal = () => {
    handleClose();
    navigate(-1);
  };

  return { handleCloseModal, state, data, loading, error };
};

export default useProductDetails;

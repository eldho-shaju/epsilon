import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseSdk";

const useHeader = (isMobile) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const isHome = location?.pathname === "/" ? "home" : "";

  useEffect(() => {
    const fetchData = async () => {
      try {
        let navMenu = [];
        const querySnapshot = await getDocs(collection(db, "header"));
        querySnapshot.forEach((doc) => {
          navMenu = [...navMenu, doc?.data()];
        });
        setData(navMenu);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (db && data?.length === 0) {
      fetchData();
    }
  }, []);

  useEffect(() => {
    if (!isMobile && !!isHome) {
      const handleScroll = () => {
        const navbar = document.getElementById("navbar");
        if (window.scrollY > 70 && navbar) {
          navbar.classList.add("scrolled");
        } else if (navbar) {
          navbar.classList.remove("scrolled");
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isMobile, isHome]);

  return { data, loading, isHome };
};

export default useHeader;

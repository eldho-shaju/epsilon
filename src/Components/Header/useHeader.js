"use client";
import { useEffect, useState } from "react";
import { db } from "../../firebaseSdk";
import { collection, getDocs } from "firebase/firestore";
import { useLocation } from "react-router-dom";

const useHeader = (isMobile) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const isHome = !loading && location?.pathname === "/" ? "home" : "";

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "header"));
      querySnapshot.forEach((doc) => {
        setData((prevData) => [...prevData, doc.data()]);
        setLoading(false);
      });
    };
    if (db && data?.length === 0) fetchData();

    if (!isMobile && !!isHome) {
      const handleScroll = () => {
        const navbar = document.getElementById("navbar");
        if (window.scrollY > 70) {
          navbar.classList.add("scrolled");
        } else {
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

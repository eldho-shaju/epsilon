import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseSdk";
import { useRecoilState } from "recoil";
import { bannerImg } from "../../Recoil/imageAtom";

const useHeader = (isMobile) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const [isBannerLoaded] = useRecoilState(bannerImg);

  const isHome = location?.pathname === "/" ? "home" : "";

  const dataLength = data?.length > 0;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "header"));
        querySnapshot.forEach((doc) => {
          setData((prevData) => [...prevData, doc.data()]);
        });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    if (db && !dataLength) fetchData();

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
  }, [isMobile, isHome, dataLength]);

  return { data, loading, isHome };
};

export default useHeader;

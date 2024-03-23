"use client";
import { useEffect, useState } from "react";
import { db } from "../../firebaseSdk";
import { collection, getDocs } from "firebase/firestore";

const useHeader = (isMobile, isHome) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "header"));
      querySnapshot.forEach((doc) => {
        setData((prevData) => [...prevData, doc.data()]);
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

  // if (!isMobile && isHome) {
  //   window.addEventListener("scroll", function () {
  //     const navbar = document.getElementById("navbar");
  //     if (window.scrollY > 70) {
  //       navbar.classList.add("scrolled");
  //     } else {
  //       navbar.classList.remove("scrolled");
  //     }
  //   });
  // }

  // Get the computed background color of the body element
  // const bodyBackgroundColor = window.getComputedStyle(
  //   document.body
  // ).backgroundColor;
  // console.log("Background color of body:", bodyBackgroundColor);

  return { data };
};

export default useHeader;

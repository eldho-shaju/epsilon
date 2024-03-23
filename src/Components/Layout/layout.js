import React, { useEffect, useState } from "react";
import Home from "../../Page/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "../../Page/Products";
import AboutUs from "../../Page/AboutUs";
import ContactUs from "../../Page/ContactUs/ContactUs";
import Footer from "../Footer";
import Header from "../Header";
import ProductDetail from "../ProductDetailPage";
import ErrorPage from "../ErrorPage";

const Layout = () => {
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setRefresh(true), 6000 * 3600);

    return () => {
      clearTimeout(id);
    };
  }, []);

  return (
    <>
      <BrowserRouter forceRefresh={refresh}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/product-type" element={<Products />} />
          <Route path="/product-type/:type" element={<Products />} />
          <Route path="/:type/:detail" element={<ProductDetail />} />
          <Route
            path="*"
            element={
              <ErrorPage errorMsg="Page you are looking for is not found" />
            }
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default Layout;

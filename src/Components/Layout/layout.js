import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../Page/Home";
import Footer from "../Footer";
import Header from "../Header";
import Loader from "../Loader";

const Products = lazy(() => import("../../Page/Products"));
const ProductDetail = lazy(() => import("../ProductDetailPage"));
const AboutUs = lazy(() => import("../../Page/AboutUs"));
const ErrorPage = lazy(() => import("../ErrorPage"));
const ContactUs = lazy(() => import("../../Page/ContactUs"));

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
        <Suspense fallback={<Loader />}>
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
        </Suspense>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default Layout;

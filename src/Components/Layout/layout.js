import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../Page/Home";
import Footer from "../Footer";
import Header from "../Header";
import Loader from "../Loader";
import useGlobalHook from "./useGlobalHook";

const ProductTypes = lazy(() => import("../../Page/ProductTypes"));
const ProductListing = lazy(() => import("../../Page/ProductListing"));
const ProductDetail = lazy(() => import("../ProductDetailPage"));
const AboutUs = lazy(() => import("../../Page/AboutUs"));
const ErrorPage = lazy(() => import("../ErrorPage"));
const ContactUs = lazy(() => import("../../Page/ContactUs"));

const Layout = () => {
  const { refresh } = useGlobalHook();

  return (
    <>
      <BrowserRouter forceRefresh={refresh}>
        <Header />
        <Suspense fallback={<Loader />}>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/product-type" element={<ProductTypes />} />
              <Route path="/product-type/:type" element={<ProductListing />} />
              <Route path="/:type/:detail" element={<ProductDetail />} />
              <Route
                path="*"
                element={
                  <ErrorPage errorMsg="Page you are looking for is not found" />
                }
              />
            </Routes>
          </main>
        </Suspense>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default Layout;

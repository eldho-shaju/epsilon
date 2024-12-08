import dynamic from "next/dynamic";
import Header from "@components/Header/header";

const Footer = dynamic(() => import("@components/Footer/Footer"));

const PageLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex-grow w-full mx-auto relative">{children}</main>
      <Footer />
    </>
  );
};

export default PageLayout;

// const ProductListing = lazy(() => import("../../Page/ProductListing"));
// const ProductDetail = lazy(() => import("../ProductDetailPage"));
// const AboutUs = lazy(() => import("../../Page/AboutUs"));
// const ErrorPage = lazy(() => import("../ErrorPage"));
// const ContactUs = lazy(() => import("../../Page/ContactUs"));

// const Layout = () => {
//   const { refresh } = useGlobalHook();

//   return (
//     <>
//       <BrowserRouter forceRefresh={refresh}>
//         <Header />
//         <Suspense fallback={<Loader />}>
//           <main>
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/about" element={<AboutUs />} />
//               <Route path="/contact-us" element={<ContactUs />} />
//               <Route path="/product-type" element={<ProductTypes />} />
//               <Route path="/product-type/:type" element={<ProductListing />} />
//               <Route
//                 path="/product-type/:type/:detail"
//                 element={<ProductDetail />}
//               />
//               <Route
//                 path="*"
//                 element={
//                   <ErrorPage errorMsg="Page you are looking for is not found" />
//                 }
//               />
//             </Routes>
//           </main>
//         </Suspense>
//       </BrowserRouter>
//       <Footer />
//     </>
//   );
// };

// export default Layout;

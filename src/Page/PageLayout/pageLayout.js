import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PageLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex-grow mt-mobileheader md:mt-header w-full ">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default PageLayout;

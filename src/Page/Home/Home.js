import Loader from "../../Components/Loader";
import Banner from "../../Widget/Banner";
import ErrorPage from "../../Components/ErrorPage";
import Grid from "../../Widget/Grid";
import useHome from "./useHome";
import ProductGrid from "../../Widget/ProductGrid/productGrid";

const HomePage = () => {
  const { grid, banner, loading, error } = useHome();

  if (loading && !error) return <Loader />;
  if (error) return <ErrorPage errorMsg="Something went wrong" />;

  return (
    <>
      <Banner banner={banner} />
      <ProductGrid />
      <Grid grid={grid} />
    </>
  );
};

export default HomePage;

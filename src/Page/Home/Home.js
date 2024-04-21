import Banner from "../../Widget/Banner";
import ErrorPage from "../../Components/ErrorPage";
import ProductGrid from "../../Widget/ProductGrid/proxductGrid";
import Grid from "../../Widget/Grid";
import useHome from "./useHome";

const HomePage = () => {
  const { grid, banner, loading, error } = useHome();

  if (error) return <ErrorPage errorMsg="Something went wrong" />;

  return (
    <>
      <Banner banner={banner} loading={loading} />
      <ProductGrid />
      <Grid grid={grid} loading={loading} />
    </>
  );
};

export default HomePage;

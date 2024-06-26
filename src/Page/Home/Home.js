import Banner from "../../Widget/Banner";
import ProductGrid from "../../Widget/ProductGrid";
import Grid from "../../Widget/Grid";
import ErrorPage from "../../Components/ErrorPage";
import useHome from "./useHome";

const HomePage = () => {
  const { grid, banner, loading, error, widget } = useHome();

  if (error || (!loading && widget?.length === 0))
    return <ErrorPage errorMsg="Something went wrong" />;

  return (
    <>
      <Banner banner={banner} loading={loading} />
      <ProductGrid />
      <Grid grid={grid} loading={loading} />
    </>
  );
};

export default HomePage;

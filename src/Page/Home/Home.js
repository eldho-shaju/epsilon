import { lazy } from "react";
import Loader from "../../Components/Loader";
import Banner from "../../Widget/Banner";
import useHome from "./useHome";
import ErrorPage from "../../Components/ErrorPage";
// import Grid from "../../Widget/Grid";

const Grid = lazy(() => import("../../Widget/Grid"));

const HomePage = () => {
  const { grid, banner, loading, error } = useHome();

  if (loading && !error) return <Loader />;
  if (error) return <ErrorPage errorMsg="Something went wrong" />;

  return (
    <>
      <Banner banner={banner} />
      <Grid grid={grid} />
    </>
  );
};

export default HomePage;

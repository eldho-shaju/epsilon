// "use client";
// import ProductGrid from "../../widget/ProductGrid";
// import Grid from "../../widget/Grid";
// import useHome from "./useHome";

import { getFirebaseData } from "@utils/getFirebaseData";
import Banner from "@widget/Banner";

const HomePage = async () => {
  const widgetData = await getFirebaseData("homeWidgets");

  const banner =
    (widgetData &&
      widgetData?.length > 0 &&
      widgetData?.find((ele) => ele?.type === "banner")) ||
    {};

  const grid =
    (widgetData &&
      widgetData?.length > 0 &&
      widgetData?.find((ele) => ele?.type === "four-grid")) ||
    {};

  // const { grid, banner, loading, error, widget } = useHome();

  return (
    <>
      <Banner banner={banner} />
      {/* <ProductGrid /> */}
      {/* <Grid grid={grid} loading={loading} /> */}
    </>
  );
};

export default HomePage;

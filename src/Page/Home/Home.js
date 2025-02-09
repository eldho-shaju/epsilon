import { getFirebaseData } from "@/utils/getFirebaseData";
import Banner from "@/widget/Banner";
import WidgetGrid from "@/widget/Grid";
import ProductGridMain from "@/widget/ProductGrid";

const Home = async () => {
  const widgetData = await getFirebaseData("homeWidgets");
  const data = await getFirebaseData("product-type");

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

  return (
    <>
      <Banner banner={banner} />
      <ProductGridMain data={data} />
      <WidgetGrid grid={grid} />
    </>
  );
};

export default Home;

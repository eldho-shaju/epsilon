import Banner from "@/widget/Banner";
import WidgetGrid from "@/widget/Grid";
import ProductGridMain from "@/widget/ProductGrid";

const HomePage = ({ widgetData, data }) => {
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

export default HomePage;

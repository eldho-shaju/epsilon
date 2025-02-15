import ProductDetail from "../../../pageRoutes/ProductDetailPage";

const DetailPage = async ({ params }) => {
  const { detail } = await params;

  return <ProductDetail url_key={detail} />;
};

export default DetailPage;

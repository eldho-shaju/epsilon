import ProductDetailPage from "@/pageRoutes/ProductDetailPage";

const DetailPage = async ({ params }) => {
  const { detail } = await params;

  return <ProductDetailPage url_key={detail} />;
};

export default DetailPage;

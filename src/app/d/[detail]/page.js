import ProductDetail from "@/components/ProductDetailPage";

const DetailPage = ({ params }) => {
  const { detail } = params;

  return <ProductDetail url_key={detail} />;
};

export default DetailPage;

import ErrorPage from "../../Components/ErrorPage";
import Loader from "../../Components/Loader";
import ProductHome from "../../Components/ProductHome";
import useProductListing from "./useProductListing";

const ProductListing = () => {
  const { data, loading, error, formattedText } = useProductListing();

  if (loading && !error) return <Loader />;
  if (error) return <ErrorPage errorMsg="Nothing here to display" />;

  return (
    <ProductHome
      data={data?.[0]?.items}
      title={formattedText}
      productType={data?.[0]?.productType}
      isListing
    />
  );
};

export default ProductListing;

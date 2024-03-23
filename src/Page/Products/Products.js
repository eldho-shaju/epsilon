import ErrorPage from "../../Components/ErrorPage";
import Loader from "../../Components/Loader";
import ProductHome from "../../Components/ProductHome";
import useProducts from "./useProducts";

const Products = () => {
  const { data, loading, error, isProductTypeListing, formattedText } =
    useProducts();

  if (loading && !error) return <Loader />;
  if (error) return <ErrorPage errorMsg="Nothing here to display" />;

  return (
    <>
      {isProductTypeListing ? (
        <ProductHome data={data} isProductTypeList title="Diverse Collection" />
      ) : (
        <ProductHome
          data={data?.[0]?.items}
          title={formattedText}
          productType={data?.[0]?.productType}
          isListing
        />
      )}
    </>
  );
};

export default Products;

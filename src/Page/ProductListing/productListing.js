"use client";
import ProductHome from "@components/ProductHome";
import ErrorPage from "@components/ErrorPage";
import Loader from "@components/Loader";
import useProductListing from "./useProductListing";

const ProductListing = ({ subCollection }) => {
  const { data, loading, error, formattedText } = useProductListing({
    subCollection,
  });

  if (loading && !error) return <Loader />;
  if (error) return <ErrorPage errorMsg="Nothing here to display" />;

  return (
    <ProductHome
      data={data}
      title={formattedText}
      productType={data?.[0]?.productType}
      isListing
    />
  );
};

export default ProductListing;

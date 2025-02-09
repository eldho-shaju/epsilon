"use client";
import ProductHome from "@/components/ProductHome";
import ErrorPage from "@/components/ErrorPage";
import LoadingUI from "@/components/LoadingUI";
import useProductListing from "./useProductListing";

const ProductListing = ({ subCollection }) => {
  const { data, loading, error, formattedText } = useProductListing({
    subCollection,
  });

  const breadCrumbs = [
    { name: "Product Types", link: "/product-type" },
    { name: formattedText, link: `` },
  ];

  if (loading && !error) return <LoadingUI />;
  if (error || (!loading && data?.length === 0))
    return <ErrorPage errorMsg="Nothing here to display" />;

  return (
    <ProductHome
      data={data}
      title={formattedText}
      productType={data?.[0]?.productType}
      isListing
      breadCrumbs={breadCrumbs}
      subCollection={subCollection}
    />
  );
};

export default ProductListing;

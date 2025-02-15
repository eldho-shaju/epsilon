"use client";
import Products from "../../components/Products";
import ErrorUi from "../../components/ErrorUi";
import LoadingAnimation from "../../components/LoadingAnimation";
import useProductListing from "./useProductListing";

const ProductListing = ({ docID }) => {
  const { data, loading, error, formattedText } = useProductListing({
    docID,
  });

  const breadCrumbs = [
    { name: "Product Types", link: "/product-type" },
    { name: formattedText, link: `` },
  ];

  if (loading && !error) return <LoadingAnimation />;
  if (error || (!loading && data?.length === 0))
    return <ErrorUi errorMsg="Nothing here to display" />;

  return (
    <Products
      data={data}
      title={formattedText}
      isListing
      breadCrumbs={breadCrumbs}
      docID={docID}
    />
  );
};

export default ProductListing;

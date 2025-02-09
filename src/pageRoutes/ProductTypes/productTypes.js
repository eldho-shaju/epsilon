"use client";
import LoadingUI from "@/components/LoadingUI";
import useProductTypes from "./useProductTypes";
import ProductHome from "@/components/ProductHome";
import ErrorPage from "@/components/ErrorPage";

const ProductTypes = () => {
  const { data, loading, error } = useProductTypes();

  if (error || (!loading && data?.length === 0)) return <ErrorPage />;
  if (loading) return <LoadingUI />;

  return (
    <ProductHome
      data={data}
      isProductTypes
      title="Diverse Collections"
      breadCrumbs={breadCrumbs}
    />
  );
};

export default ProductTypes;

const breadCrumbs = [{ name: "Product Types", link: "" }];

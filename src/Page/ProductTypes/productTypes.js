"use client";
import Loader from "@components/Loader";
import useProductTypes from "./useProductTypes";
import ProductHome from "@components/ProductHome";
import ErrorPage from "@components/ErrorPage";

const ProductTypes = () => {
  const { data, loading, error } = useProductTypes();

  if (error || (!loading && data?.length === 0)) return <ErrorPage />;
  if (loading) return <Loader />;

  return <ProductHome data={data} isProductTypes title="Diverse Collections" />;
};

export default ProductTypes;

import ErrorPage from "../../Components/ErrorPage";
import Loader from "../../Components/Loader";
import ProductHome from "../../Components/ProductHome";
import useProductTypes from "./useProductTypes";

const ProductTypes = () => {
  const { data, loading, error } = useProductTypes();

  if (error) return <ErrorPage />;
  if (loading) return <Loader />;

  return <ProductHome data={data} isProductTypes title="Diverse Collections" />;
};

export default ProductTypes;

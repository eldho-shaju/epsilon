import ProductHome from "@/components/ProductHome";

const ProductTypes = ({ data }) => {
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

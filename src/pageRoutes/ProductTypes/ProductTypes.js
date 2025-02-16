import Products from "@/components/Products";

const ProductTypes = ({ data }) => {
  return (
    <Products
      data={data}
      isProductTypes
      title="Diverse Collections"
      breadCrumbs={breadCrumbs}
    />
  );
};

export default ProductTypes;

const breadCrumbs = [{ name: "Product Types", link: "" }];

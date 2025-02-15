import { notFound } from "next/navigation";
import ProductTypes from "@/pageRoutes/ProductTypes";
import { getFirebaseData } from "@/utils/getFirebaseData";

const ProductTypesPage = async () => {
  const { data } = await getFirebaseData({ collectionName: "product-type" });

  if (!data) {
    notFound();
  }

  return <ProductTypes data={data} />;
};

export default ProductTypesPage;

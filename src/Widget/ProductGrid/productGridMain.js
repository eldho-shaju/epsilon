"use client";
import dynamic from "next/dynamic";
import Shimmer from "./Shimmer/shimmer";

const ProductGrid = dynamic(() => import("./productGrid"), {
  ssr: false,
  loading: () => <Shimmer />,
});

const ProductGridMain = ({ data }) => {
  return <ProductGrid data={data} />;
};

export default ProductGridMain;

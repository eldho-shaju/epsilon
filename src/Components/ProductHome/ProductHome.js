"use client";
import { memo } from "react";
import BreadCrumb from "../BreadCrumb";
import ProductItem from "../ProductItem";

const ProductHome = memo((props) => {
  const {
    data = [],
    isProductTypes,
    title,
    productType,
    isListing,
    breadCrumbs,
    subCollection,
  } = props;

  return (
    <section className="pb-10">
      <BreadCrumb data={breadCrumbs} />
      <div className="container mx-auto relative flex flex-col justify-center gap-8 items-center pt-breadcrumb">
        <div className="flex-none text-center w-3/4">
          <p className="text-xl font-medium capitalize">{title}</p>
          {isProductTypes && (
            <p className="mt-4">
              Explore our diverse collection of metal furniture and decors,
              curated to suit various tastes and preferences. From sleek and
              modern designs to industrial and rustic styles, we offer a wide
              range of options to complement any interior aesthetic. Our
              collection includes:
            </p>
          )}
        </div>
        {data?.length > 0 && (
          <div className={`grow grid grid-cols-4 gap-x-6 gap-y-8 mt-8`}>
            {data?.map((item, index) => (
              <ProductItem
                item={item}
                isListing={isListing}
                productType={productType}
                key={index}
                subCollection={subCollection}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
});

export default ProductHome;

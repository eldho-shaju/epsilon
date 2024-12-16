"use client";
import { memo } from "react";
import BreadCrumb from "../BreadCrumb";
import ProductItem from "../ProductItem";
import Link from "@components/Link";
import useScrollToTop from "@hooks/useScrollToTop";

const ProductHome = memo((props) => {
  const { data = [], isProductTypes, title, productType, isListing } = props;

  const { handleScrollPosition } = useScrollToTop();

  return (
    <section className="relative container mx-auto">
      <BreadCrumb data={breadCrumbs} />
      <div className="relative flex flex-col justify-center gap-8 items-center top-breadcrumb pb-12">
        <div className="flex-none text-center w-3/4">
          <p className="text-xl font-medium">{title}</p>
          {isProductTypes && (
            <p className="mt-4">
              Explore our diverse collection of metal furniture, curated to suit
              various tastes and preferences. From sleek and modern designs to
              industrial and rustic styles, we offer a wide range of options to
              complement any interior aesthetic. Our collection includes:
            </p>
          )}
        </div>
        {data?.length > 0 && (
          <div className={`grow grid grid-cols-4 gap-x-6 gap-y-8 mt-8`}>
            {data?.map((type) => (
              <div className="relative w-full" key={type?.id}>
                <Link
                  className="w-full h-full"
                  onClick={handleScrollPosition}
                  href={
                    productType ? `/:${productType}/${type?.link}` : type?.link
                  }
                >
                  <ProductItem
                    name={type?.name}
                    img={type?.img?.[0]?.downloadURL}
                    price={type?.price}
                    isListing={isListing}
                  />
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
});

export default ProductHome;

const breadCrumbs = [{ name: "Product Types", link: "" }];

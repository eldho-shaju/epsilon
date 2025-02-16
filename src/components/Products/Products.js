"use client";
import ProductItem from "../ProductItem";
import CustomBreadcrumb from "../CustomBreadcrumb";

const Products = (props) => {
  const {
    data = [],
    isProductTypes,
    title,
    isListing,
    breadCrumbs,
    docID,
  } = props;

  return (
    <>
      <CustomBreadcrumb data={breadCrumbs} />
      <section className="mb-4 lg:mb-breadcrumb md:mt-breadcrumb p-mobile_margin md:pt-0">
        <div className="lg:container mx-mobile_margin lg:mx-auto flex flex-col justify-center gap-4 xl:gap-8 items-center  md:pt-0">
          <div className="text-center w-full md:w-3/4">
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 capitalize">
              {title}
            </p>
            {isProductTypes && (
              <p className="mt-2 md:mt-4 text-justify md:text-center text-sm md:text-md leading-mobile_line_height">
                Explore our diverse collection of metal furniture and decors,
                curated to suit various tastes and preferences. From sleek and
                modern designs to industrial and rustic styles, we offer a wide
                range of options to complement any interior aesthetic. Our
                collection includes:
              </p>
            )}
          </div>
          {data?.length > 0 && (
            <div
              className={`w-full grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-8`}
            >
              {data?.map((item, index) => (
                <div key={index} className={"flex justify-center items-start"}>
                  <ProductItem
                    item={item}
                    isListing={isListing}
                    docID={docID}
                    priority={index < 4}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Products;

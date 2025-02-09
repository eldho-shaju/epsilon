"use client";
import ProductItem from "@/components/ProductItem";
import ViewAll from "@/components/ViewAll";
import useDeviceTypeCheck from "@/hooks/useDeviceTypeCheck";

const ProductGrid = ({ data }) => {
  const { isMobile } = useDeviceTypeCheck();

  const sliceNumber = isMobile ? 5 : 4;

  return (
    data &&
    data?.length > 0 && (
      <section className="py-4 md:py-8 bg-natural_gray">
        <div className="lg:container mx-mobile_margin px-2 lg:mx-auto">
          <div className="w-100 flex justify-center md:justify-between items-center mb-4 md:mb-8">
            <p className="text-xl md:text-2xl font-medium">Our collections</p>
            {!isMobile && <ViewAll link="/product-type" />}
          </div>
          <div className="w-full grid gap-4 grid-cols-2 md:grid-cols-4 md:gap-8">
            {data?.slice(0, sliceNumber)?.map((item, index) => {
              const priority = isMobile ? index < 3 : index < 5;

              return (
                <ProductItem item={item} key={index} priority={priority} />
              );
            })}
            {isMobile && (
              <div className="w-full flex justify-center items-center">
                <ViewAll link="/product-type" />
              </div>
            )}
          </div>
        </div>
      </section>
    )
  );
};

export default ProductGrid;

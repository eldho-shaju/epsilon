"use client";
import ProductItem from "@components/ProductItem";
import ViewAll from "@components/ViewAll";

const ProductGrid = ({ data }) => {
  return (
    data &&
    data?.length > 0 && (
      <section className="py-8 bg-neutral-100">
        <div className="container mx-auto">
          <div className="w-100 flex justify-between items-center mb-8">
            <p className="text-2xl font-medium">Our collections</p>
            <ViewAll link="/product-type" />
          </div>
          <div className="w-full grid gap-8 grid-cols-4">
            {data?.slice(0, 4)?.map((item, index) => (
              <div
                className="relative w-full shadow rounded-md border-2 hover:shadow-lg hover:scale-105 hover:ease-in-out duration-300"
                key={index}
              >
                <ProductItem item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  );
};

export default ProductGrid;

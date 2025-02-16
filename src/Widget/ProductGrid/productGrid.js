"use client";
import ProductItem from "@/components/ProductItem";
import ViewAll from "@/components/ViewAll";
import { Icon } from "@iconify/react";
import "./productGrid.css";
import Link from "@/components/Link";

const ProductGrid = ({ data }) => {
  return (
    data &&
    data?.length > 0 && (
      <section className="py-4 md:py-8 bg-natural_gray">
        <div className="lg:container mx-mobile_margin px-2 lg:mx-auto">
          <div className="w-100 flex justify-center md:justify-between items-center mb-4 md:mb-8">
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
              Our collections
            </p>
            <div className="hidden md:block">
              <ViewAll link="/product-type" />
            </div>
          </div>
          <div className="w-full grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-8">
            {data?.map((item, index) => {
              const priority = index < 5;

              return (
                <div
                  key={index}
                  className={"product-item flex justify-center items-start"}
                >
                  <ProductItem item={item} priority={priority} />
                </div>
              );
            })}
            <Link
              href="/product-type"
              className="w-full flex justify-center items-center md:hidden text-sm "
            >
              View all
              <Icon icon="mdi:arrow-right" />
            </Link>
          </div>
        </div>
      </section>
    )
  );
};

export default ProductGrid;

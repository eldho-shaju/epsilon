import ProductItem from "@/components/ProductItem";
import ViewAll from "@/components/ViewAll";
import "./productGrid.css";

const ProductGrid = ({ data }) => {
  return (
    data &&
    data?.length > 0 && (
      <section className="py-4 md:py-8 bg-natural_gray">
        <div className="lg:container mx-mobile_margin px-2 lg:mx-auto">
          <div className="w-100 flex justify-center md:justify-between items-center mb-4 md:mb-8">
            <p className="text-xl md:text-2xl font-medium">Our collections</p>
            <div className="hidden md:block">
              <ViewAll link="/product-type" />
            </div>
          </div>
          <div className="w-full grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-8">
            {data?.map((item, index) => {
              const priority = index < 5;

              return (
                <div key={index} className={"product-item"}>
                  <ProductItem item={item} priority={priority} />
                </div>
              );
            })}
            <div className="w-full flex justify-center items-center md:hidden">
              <ViewAll link="/product-type" />
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default ProductGrid;

const ProductShimmer = ({ count = 5 }) => {
  return (
    <div className="mb-4 lg:mb-breadcrumb mt-breadcrumb">
      <div className="lg:container lg:mx-auto mx-mobile_margin grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 xl:gap-8">
        {[...Array(count)]?.map((_, index) => (
          <div key={index} className="w-full flex justify-center items-start">
            <div className="animate-pulse max-w-[200px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] w-full contain-content">
              <div className="h-[200px] md:h-[300px] bg-gray-200 mb-4"></div>
              <div className="">
                <div className="h-4 bg-gray-300 w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-300 w-1/2"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductShimmer;

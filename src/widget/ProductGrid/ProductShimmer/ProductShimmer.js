const ProductShimmer = ({ count = 5 }) => {
  return (
    <div className="mb-4 lg:mb-breadcrumb mt-breadcrumb">
      {/* <div className="flex justify-center md:justify-between items-center mb-4">
        <p className="text-xl font-semibold ">Our collections</p>
        <div className="hidden md:flex text-gray-500 items-center space-x-2 cursor-pointer">
          <div className="h-4 bg-gray-300 rounded w-16 animate-pulse"></div>
          <svg
            className="h-5 w-5 text-gray-300 animate-pulse"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div> */}

      <div className="lg:container lg:mx-auto mx-mobile_margin grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 xl:gap-8">
        {[...Array(count)]?.map((_, index) => (
          <div key={index} className="w-full flex justify-center items-start">
            <div className="animate-pulse max-w-[200px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] w-full contain-content">
              <div className="h-[200px] md:h-[300px] bg-gray-200 rounded-lg mb-4"></div>
              <div className="">
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductShimmer;

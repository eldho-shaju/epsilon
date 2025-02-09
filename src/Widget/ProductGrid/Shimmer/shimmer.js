const Shimmer = () => {
  return (
    <div className="p-4">
      <div className="flex justify-center md:justify-between items-center mb-4">
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
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
        {[...Array(4)]?.map((_, index) => (
          <div className="p-1 md:p-2 lg:p-4 animate-pulse" key={index}>
            <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
            <div className="">
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;

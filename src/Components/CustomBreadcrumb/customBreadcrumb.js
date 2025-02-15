"use client";
import Link from "../Link";

const CustomBreadcrumb = ({ data }) => {
  const breadCrumbs = home?.concat(data);

  return (
    <div className="w-full h-breadcrumb bg-white z-10 fixed flex justify-start mx-mobile_margin lg:mx-auto lg:justify-center items-center hidden md:flex">
      <div className="container fixed flex items-center">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            {breadCrumbs?.map((item, index) => (
              <li className="inline-flex items-center" key={index}>
                {item?.id !== "home" && (
                  <svg
                    className="rtl:rotate-180 w-3 h-3 text-gray-600 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                )}
                <Link
                  href={item?.link}
                  className={`inline-flex items-center text-sm font-medium text-gray-400 hover:text-gray-900 capitalize ${
                    !item?.link ? "pointer-events-none" : "text-gray-600"
                  }`}
                >
                  {item?.id === "home" && (
                    <svg
                      className="w-3 h-3 me-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                    </svg>
                  )}
                  {item?.name}
                </Link>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default CustomBreadcrumb;

const home = [
  {
    id: "home",
    name: "Home",
    link: "/",
  },
];

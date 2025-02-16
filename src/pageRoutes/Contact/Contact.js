"use client";
import { Fragment } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import CustomBreadcrumb from "../../components/CustomBreadcrumb";
import dynamic from "next/dynamic";

const ContactusForm = dynamic(() => import("../../components/ContactForm"), {
  ssr: false,
  loading: () => (
    <div className="bg-white p-4 rounded-[20px] flex flex-col gap-1 items-start justify-center prose text-sm w-full md:w-[50%] lg:w-[40%] animate-pulse">
      <div className="text-md rounded-md p-2.5 bg-[#7a4f4f] text-sm w-full p-2.5 border-none text-white placeholder:text-white focus:outline-none focus:ring-0 animate-pulse h-10 mb-6"></div>
      <div className="text-md rounded-md p-2.5 bg-[#7a4f4f] text-sm w-full p-2.5 border-none text-white placeholder:text-white focus:outline-none focus:ring-0 animate-pulse h-10 mb-6"></div>
      <div className="text-md rounded-md p-2.5 bg-[#7a4f4f] text-sm w-full p-2.5 border-none text-white placeholder:text-white focus:outline-none focus:ring-0 animate-pulse h-20 mb-6"></div>
      <div className="flex justify-end w-full mt-2">
        <div className="btn text-maroon bg-[#7a4f4f] py-2 px-2 rounded-md animate-pulse h-10 w-20"></div>
      </div>
    </div>
  ),
});

const Contact = ({ data }) => {
  const pageDescription =
    data && data?.length > 0 && data?.find((ele) => ele?.id === "page_desc");

  const phone =
    data && data?.length > 0 && data?.find((ele) => ele?.id === "phone");

  const primaryNumber =
    phone &&
    phone?.data?.length > 0 &&
    phone?.data?.find((ele) => ele?.preference === "primary");

  return (
    <>
      <CustomBreadcrumb data={breadCrumbs} />
      <section className="mb-2 lg:mb-breadcrumb mt-0 md:mt-breadcrumb">
        <div className="lg:container mx-auto relative flex flex-col justify-center gap-4 lg:gap-8 items-center p-mobile_margin md:pt-0">
          <div className="block text-center w-full lg:w-[75%] mb-8">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
              Connect with our team
            </h1>
            <p className="text-sm md:text-md text-justify md:text-center leading-mobile_line_height">
              {pageDescription?.content}
            </p>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-4 lg:gap-8 bg-natural_gray p-8 rounded-[20px] items-center justify-evenly">
            <div className="contents">
              <p className="font-bold text-3xl leading-[1.2] md:text-4xl md:leading-[1.2] lg:text-5xl lg:leading-[1.2]">
                <span className="block">What&apos;s on</span>
                <span className="block">your mind?</span>
              </p>
              <Icon
                className="text-4xl rotate-90 md:rotate-0"
                icon="ic:sharp-double-arrow"
                width={40}
                height={40}
              />
            </div>
            <div className="block bg-white py-4 px-8 rounded-[20px] w-full md:w-[50%] lg:w-[40%]">
              <p className="text-center text-md inline-flex flex-col items-center md:flex-row gap-1">
                Just tap the number to dial
                <span>
                  <Icon
                    icon="fluent:people-call-20-filled"
                    width="20"
                    height="20"
                  />
                </span>
              </p>
              <div className="flex flex-col gap-2 mt-4 items-center justify-center">
                {phone?.data &&
                  phone?.data?.length > 0 &&
                  phone?.data?.map((ele, index) => (
                    <Fragment key={index}>
                      <a
                        href={`tel:${ele?.link}`}
                        className="text-lg font-semibold"
                      >
                        {ele?.phone}
                      </a>
                    </Fragment>
                  ))}
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-4 lg:gap-8 bg-natural_gray p-8 rounded-[20px] items-center justify-evenly">
            <div className="contents">
              <p className="font-bold text-3xl leading-[1.2] md:text-4xl md:leading-[1.2] lg:text-5xl lg:leading-[1.2]">
                <span className="block">Okay!</span>
                <span className="block">Let&apos;s chat!</span>
              </p>
              <Icon
                className="text-4xl rotate-90 md:rotate-0"
                icon="ic:sharp-double-arrow"
                width={40}
                height={40}
              />
            </div>
            <ContactusForm primaryNumber={primaryNumber} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

const breadCrumbs = [{ name: "Contact Us", link: `` }];

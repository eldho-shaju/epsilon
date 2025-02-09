"use client";
import { Fragment } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import ContactusForm from "@/components/ContactusForm";
import useContact from "./useContact";
import LoadingUI from "@/components/LoadingUI";
import ErrorPage from "@/components/ErrorPage";
import dynamic from "next/dynamic";

const BreadCrumb = dynamic(() => import("@/components/BreadCrumb"), {
  ssr: false,
});

const ContactUs = () => {
  const { data, loading, error } = useContact();

  if (loading && !error) return <LoadingUI />;
  if (error || (!loading && data?.length === 0)) return <ErrorPage />;

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
      <BreadCrumb data={breadCrumbs} />
      <section className="mb-2 lg:mb-breadcrumb mt-0 md:mt-breadcrumb">
        <div className="lg:container mx-auto relative flex flex-col justify-center gap-4 lg:gap-8 items-center p-mobile_margin md:pt-0">
          <div className="block text-center w-full lg:w-[75%] mb-8">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
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

export default ContactUs;

const breadCrumbs = [{ name: "Contact Us", link: `` }];

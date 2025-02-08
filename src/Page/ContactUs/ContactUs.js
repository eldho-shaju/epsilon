"use client";
import { Fragment } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import ContactusForm from "../../Components/ContactusForm";
import useContact from "./useContact";
import BreadCrumb from "@/components/BreadCrumb";
import Loader from "@/components/Loader";
import ErrorPage from "@/components/ErrorPage";

const ContactUs = () => {
  const { data, loading, error } = useContact();

  if (loading && !error) return <Loader />;
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
      <section className="mb-breadcrumb mt-breadcrumb">
        <div className="container mx-auto relative flex flex-col justify-center gap-8 items-center">
          <div className="block text-center w-[75%] mb-8">
            <h1 className="text-3xl font-bold mb-4">Connect with our team</h1>
            <p className="text-md">{pageDescription?.content}</p>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-8 bg-gray-100 p-8 rounded-[20px] items-center justify-evenly">
            <div className="contents">
              <p className="font-bold text-5xl leading-[1.3]">
                <span className="block">What's on</span>
                <span className="block">your mind?</span>
              </p>
              <Icon className="text-4xl" icon="ic:sharp-double-arrow" />
            </div>
            <div className="block bg-white py-4 px-8 rounded-[20px]">
              <p className="text-center text-md inline-flex gap-1">
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
          <div className="w-full flex flex-col md:flex-row gap-8 bg-gray-100 p-8 rounded-[20px] items-center justify-evenly">
            <div className="contents">
              <p className="font-bold text-5xl leading-[1.3]">
                <span className="block">Okay!</span>
                <span className="block">Let's chat!</span>
              </p>
              <Icon className="text-4xl" icon="ic:sharp-double-arrow" />
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

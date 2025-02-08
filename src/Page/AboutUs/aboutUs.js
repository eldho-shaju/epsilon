"use client";
import Loader from "@/components/Loader";
import ErrorPage from "@/components/ErrorPage";
import useAbout from "./useAbout";
import Image from "@/components/Image";
import useDeviceTypeCheck from "@/hooks/useDeviceTypeCheck";
import BreadCrumb from "@/components/BreadCrumb";

const AboutUs = () => {
  const { data, loading, error } = useAbout();
  const { isMobile } = useDeviceTypeCheck();

  if (loading) return <Loader />;
  if (error || (!loading && data?.length === 0)) return <ErrorPage />;

  const images = data?.find((ele) => ele?.type === "banner");

  return (
    <>
      <BreadCrumb data={breadCrumbs} />
      <section className="mb-breadcrumb mt-breadcrumb">
        <div className="flex flex-col items-center justify-center container mx-auto pt-4">
          <Image
            src={
              isMobile
                ? images?.mobileImg?.[0]?.downloadURL
                : images?.img?.[0]?.downloadURL
            }
            alt="about-us banner"
            className="w-full h-auto max-w-[960px] object-cover"
            width={500}
            height={500}
          />

          <div className="max-w-[960px] w-full text-[#1C160C] p-4 space-y-4">
            <p className="text-4xl font-black leading-tight tracking-tight">
              About Epsilon
            </p>
            <p className="text-base text-justify leading-normal">
              At Epsilon Engineering, we’re pioneers in making metal frames and
              furniture that transform interior spaces. We focus on bringing
              together great looks, toughness, and usefulness in our designs.
            </p>
            <h2 className="text-[22px] font-bold leading-tight tracking-tight">
              Epsilon Feel The Customised Ambiance
            </h2>
            <p className="text-base text-justify leading-normal">
              Be it custom-made metal frames or stylish and ergonomic metal
              furniture for your home or business area, we’ve got a diverse
              selection to meet your needs. We’re here to collaborate with you
              in crafting a one-of-a-kind design that suits exactly what you’re
              looking for.
            </p>
            <p className="text-base text-justify leading-normal">
              At Epsilon, we take great pride in ensuring our customers are
              completely satisfied in every aspect. We recognize the importance
              of your time, and that’s why we’ve streamlined the process of
              creating metal frames and furniture to be simple and stress-free
              for you.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;

const breadCrumbs = [{ name: "About Us", link: `` }];

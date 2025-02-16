import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import Image from "@/components/Image";

const AboutUs = ({ data }) => {
  const images = data?.find((ele) => ele?.type === "banner");

  return (
    <>
      <CustomBreadcrumb data={breadCrumbs} />
      <section className="mb-breadcrumb mt-2 md:mt-breadcrumb">
        <div className="flex flex-col items-center justify-center mx-mobile_margin pt-0 md:pt-2 lg:pt-4">
          <Image
            src={images?.mobileImg?.[0]?.downloadURL}
            alt="about-us banner"
            className="w-full h-auto max-w-[960px] object-cover md:hidden"
            width={500}
            height={500}
            priority
          />
          <Image
            src={images?.img?.[0]?.downloadURL}
            alt="about-us banner"
            className="w-full h-auto max-w-[960px] object-cover hidden md:block"
            width={500}
            height={500}
            priority
          />

          <div className="max-w-[960px] w-full text-[#1C160C] p-4 space-y-4">
            <p className="text-2xl md:text-3xl font-bold leading-tight tracking-tight">
              About Epsilon
            </p>
            <p className="text-sm md:text-base text-justify leading-mobile_line_height">
              At Epsilon Engineering, we’re pioneers in making metal frames and
              furniture that transform interior spaces. We focus on bringing
              together great looks, toughness, and usefulness in our designs.
            </p>
            <h2 className="text-xl md:text-2xl font-bold leading-mobile_line_height tracking-tight">
              Epsilon Feel The Customised Ambiance
            </h2>
            <p className="text-sm md:text-base text-justify leading-mobile_line_height">
              Be it custom-made metal frames or stylish and ergonomic metal
              furniture for your home or business area, we’ve got a diverse
              selection to meet your needs. We’re here to collaborate with you
              in crafting a one-of-a-kind design that suits exactly what you’re
              looking for.
            </p>
            <p className="text-sm md:text-base text-justify leading-mobile_line_height">
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

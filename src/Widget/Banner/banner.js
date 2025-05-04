import Image from "@/components/Image";
import Link from "@/components/Link";

const Banner = (props) => {
  const { banner } = props;
  const { content = [] } = banner || {};
  const { img = [], mobileImage = [], para } = content[0] || {};

  return (
    <section className="relative w-full h-64 sm:h-80 md:h-[30rem] lg:aspect-[16/9]">
      <div>
        <Image
          fill
          src={img?.[0]?.downloadURL || "/assets/banner/banner.jpg"}
          alt={"banner"}
          className="aspect-video object-cover hidden sm:block"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
        />
        <Image
          fill
          src={mobileImage?.[0]?.downloadURL || "/assets/banner/banner.jpg"}
          alt={"banner"}
          className="aspect-video object-cover block sm:hidden"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
        />
        {para && (
          <Link
            href="/product-type"
            className="w-full absolute top-0 bg-black bg-opacity-50 h-full flex items-end justify-center"
          >
            <p className="text-white text-center text-md pb-2 md:pb-4 lg:pb-6 md:text-2xl lg:text-3xl font-light tracking-[0.10rem] md:tracking-[0.25rem] lg:tracking-[0.45rem] shadow">
              {para}
            </p>
          </Link>
        )}
      </div>
    </section>
  );
};

export default Banner;

import Image from "@/components/Image";
import Link from "@/components/Link";

const Banner = (props) => {
  const { banner, loading } = props;

  const desktopImg = banner && banner?.bannerImg?.[0];
  const src =
    loading || !desktopImg?.src ? "/assets/banner/banner.jpg" : desktopImg?.src;

  return (
    <section className="relative w-full h-64 sm:h-80 md:h-[30rem] lg:aspect-[16/9]">
      <div>
        <Link href="/product-type">
          <Image
            fill
            src={src}
            alt={desktopImg?.name}
            className="aspect-video object-cover"
            priority
          />
          {banner?.text && (
            <div className="w-full text-center absolute bottom-1 md:bottom-4 left-1/2 transform -translate-x-1/2">
              <p className="text-white text-md md:text-2xl lg:text-3xl font-light tracking-[0.10rem] md:tracking-[0.25rem] lg:tracking-[0.45rem] shadow">
                {banner?.text}
              </p>
            </div>
          )}
        </Link>
      </div>
    </section>
  );
};

export default Banner;

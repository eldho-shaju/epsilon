import Image from "@components/Image";
import Link from "@components/Link";

const Banner = (props) => {
  const { banner, loading } = props;

  const desktopImg = banner && banner?.bannerImg?.[0];
  const src =
    loading || !desktopImg?.src ? "/assets/banner/banner.jpg" : desktopImg?.src;

  return (
    <section className="relative w-full h-64 sm:h-80 md:h-[30rem] lg:aspect-[16/9]">
      <div>
        <Link href="/product-type">
          <div>
            <Image
              fill
              src={src}
              alt={desktopImg?.name}
              className="aspect-video  object-cover"
            />
          </div>
          {banner?.text && (
            <div className="w-full text-center absolute bottom-1 left-1/2 transform -translate-x-1/2 ">
              <p className="text-white text-3xl font-light tracking-[0.45rem]">
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

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "@/components/Image";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 900 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 900, min: 600 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const ImageCarousel = ({ images }) => {
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={responsive}
      infinite={true}
      dotListClass="custom-dot-list-style"
      minimumTouchDrag={10}
      itemClass="img-carousel"
    >
      {images?.map((img, index) => (
        <Image
          key={index}
          src={img?.downloadURL}
          className="img_carousel"
          onError={(e) => (e.target.src = "asset/banner/placeholder.png")}
        />
      ))}
    </Carousel>
  );
};

export default ImageCarousel;

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
      showDots={true}
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      autoPlaySpeed={2500}
      dotListClass="custom-dot-list-style"
      minimumTouchDrag={10}
      itemClass="img-carousel"
    >
      {images?.map((img, index) => (
        <img key={index} src={img?.downloadURL} className="img_carousel" />
      ))}
    </Carousel>
  );
};

export default ImageCarousel;

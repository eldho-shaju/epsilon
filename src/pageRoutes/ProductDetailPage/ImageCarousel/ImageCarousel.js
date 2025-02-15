"use client";
import React, { useRef, useState } from "react";
import Image from "@/components/Image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./imageCarousel.css";
import useDeviceTypeCheck from "@/customHooks/useDeviceTypeCheck";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const thumbnailResponsive = {
  desktop: {
    breakpoint: { max: 3000, min: 0 },
    items: 5, // Show up to 5 thumbnails
  },
};

const ImageCarousel = ({ name, images }) => {
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { isMobile } = useDeviceTypeCheck();

  const handleClick = (index) => {
    setCurrentSlide(index);
    if (carouselRef.current) {
      carouselRef.current.goToSlide(index);
    }
  };

  return (
    <>
      {/* Main Carousel */}
      <div className="relative w-full">
        <Carousel
          ref={carouselRef}
          swipeable
          draggable
          infinite
          renderDotsOutside
          responsive={responsive}
          keyBoardControl
          customTransition="all .5"
          transitionDuration={500}
          containerClass="main-carousel"
          itemClass="carousel-item"
        >
          {images?.map((img, index) => (
            <Image
              key={index}
              src={img?.downloadURL}
              alt={name}
              width={200}
              height={200}
              className="w-full object-contain"
              priority={index === 0}
            />
          ))}
        </Carousel>
      </div>

      {!isMobile && (
        <div className="mt-1 w-full thumbnail">
          <Carousel
            swipeable
            draggable
            responsive={thumbnailResponsive}
            customRightArrow={<CustomRightArrow />}
            customLeftArrow={<CustomLeftArrow />}
            keyBoardControl
            customTransition="all .5"
            transitionDuration={500}
            containerClass="thumbnail-slider"
            itemClass="thumbnail-item"
          >
            {images.map((_, index) => (
              <CustomDot
                key={index}
                index={index}
                images={images}
                name={name}
                onClick={handleClick}
                currentSlide={currentSlide === index}
              />
            ))}
          </Carousel>
        </div>
      )}
    </>
  );
};

export default ImageCarousel;

const CustomDot = ({ index, currentSlide, onClick, images, name }) => (
  <button
    className={`mt-1 p-2px w-full ${
      currentSlide ? "ring-2 ring-blue-500" : "hover:ring-2 hover:ring-gray-400"
    }`}
    onClick={() => onClick(index)}
  >
    <Image
      src={images[index]?.downloadURL}
      alt={`${name}-thumbnail-${index}`}
      width={40}
      height={40}
      className="w-full object-contain"
    />
  </button>
);

const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      className="absolute right-0 top-1/2 transform -translate-y-1/2 text-black bg-gradient-to-l from-white to-transparent p-2 z-9 h-full"
      onClick={() => onClick()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );
};

const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      className="absolute left-0 top-1/2 transform -translate-y-1/2 text-back bg-gradient-to-r from-white to-transparent p-2 z-9 h-full"
      onClick={() => onClick()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
};

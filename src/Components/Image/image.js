"use client";
import { useState } from "react";
import NextImage from "next/image";

const Image = (props) => {
  const { src, alt = "", ...rest } = props;
  const [error, setError] = useState(false);

  const handleError = () => {
    setError(true);
  };

  let imageUrl = src;
  if (error) {
    imageUrl = "/assets/banner/placeholder.png";
  }

  return (
    <NextImage
      src={imageUrl}
      alt={alt || "image"}
      onError={handleError}
      {...rest}
    />
  );
};

export default Image;

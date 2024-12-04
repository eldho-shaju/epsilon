import NextImage from "next/image";

const Image = (props) => {
  const { src, alt = "", ...rest } = props;

  return <NextImage src={src} alt={alt} {...rest} />;
};

export default Image;

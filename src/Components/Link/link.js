import NextLink from "next/link";

const Link = (props) => {
  const { href = "#", children, ...rest } = props;

  return (
    <NextLink href={href} {...rest}>
      {children}
    </NextLink>
  );
};

export default Link;

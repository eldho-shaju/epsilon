"use client";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

const Link = (props) => {
  const pathname = usePathname();
  const { href = `${pathname}#`, children, ...rest } = props;

  return (
    <NextLink href={href} prefetch {...rest}>
      {children}
    </NextLink>
  );
};

export default Link;

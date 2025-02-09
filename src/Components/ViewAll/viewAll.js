"use client";
import Link from "../Link";
import { Icon } from "@iconify/react/dist/iconify.js";

const ViewAll = ({ link }) => {
  return (
    <Link
      href={link}
      className="no-underline flex items-center gap-1 hover:text-red-500 text-sm md:text-md"
    >
      View all
      <Icon icon="mdi:arrow-right" />
    </Link>
  );
};

export default ViewAll;

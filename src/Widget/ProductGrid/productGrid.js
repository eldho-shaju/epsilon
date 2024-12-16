"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "@components/Link";
import Image from "@components/Image";

const ProductGrid = ({ data }) => {
  return (
    data &&
    data?.length > 0 && (
      <section className="py-8 bg-neutral-100">
        <div className="container mx-auto">
          <div className="w-100 flex justify-between items-center mb-8">
            <p className="text-2xl font-medium">Our collections</p>
            <Link
              href="/product-type"
              className="no-underline flex items-center gap-1 hover:text-red-500"
            >
              View all
              <Icon icon="mdi:arrow-right" />
            </Link>
          </div>
          <div className="w-full grid gap-8 grid-cols-4">
            {data?.slice(0, 4)?.map((type, index) => (
              <Link
                key={index}
                className="w-100 text-center flex flex-col items-center rounded-md hover:shadow-lg hover:scale-105 hover:ease-in-out duration-300"
                href={type?.link ? `/product-type/${type?.link}` : "#"}
              >
                <Image
                  width={297}
                  height={20}
                  alt={type?.name}
                  src={type?.img?.[0]?.downloadURL}
                  className="fit-cover aspect-[3/4] rounded-md"
                />
                <p className="p-2 text-lg">{type?.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    )
  );
};

export default ProductGrid;

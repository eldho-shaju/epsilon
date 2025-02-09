import Image from "../Image";
import Link from "../Link";
import Price from "../Price";

const ProductItem = (props) => {
  const { item, isListing, subCollection, priority } = props;
  const { link, name, img, price } = item;

  return (
    <div className="relative w-full hover:shadow-lg hover:rounded-b-md hover:scale-105 hover:ease-in-out duration-300">
      <Link
        className={`${!link ? "pointer-events-none" : ""}`}
        href={
          isListing
            ? `/d/${link}${subCollection ? `?type=${subCollection}` : ""}`
            : `/product-type/${link}`
        }
      >
        <Image
          width={0}
          height={0}
          alt={name}
          src={img?.[0]?.downloadURL}
          className="w-full h-auto fit-cover aspect-[3/4] rounded-md"
          priority={priority}
        />
        {(name || price) && (
          <div className="py-3 px-2">
            <p className="text-sm md:text-lg font-medium">{name}</p>
            <Price price={price} />
          </div>
        )}
      </Link>
    </div>
  );
};

export default ProductItem;

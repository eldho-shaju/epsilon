import Image from "../Image";
import Link from "../Link";
import Price from "../Price";

const ProductItem = (props) => {
  const { item, isListing, subCollection } = props;
  const { link, name, img, price } = item;

  return (
    <div className="relative w-full rounded-md border hover:shadow-lg hover:scale-105 hover:ease-in-out duration-300">
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
          className="w-full h-auto fit-cover aspect-[3/4] rounded-t-md"
        />
        {(name || price) && (
          <div className="py-3 px-2">
            <h1 className="text-lg font-medium">{name}</h1>
            <Price price={price} />
          </div>
        )}
      </Link>
    </div>
  );
};

export default ProductItem;

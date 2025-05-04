import Image from "../Image";
import Link from "../Link";
import Price from "../Price";

const ProductItem = (props) => {
  const { item, isListing, docID, priority } = props;
  const { link, name, img, price } = item;

  return (
    <div className="relative shadow w-full lg:hover:shadow-lg lg:hover:scale-105 lg:hover:ease-in-out duration-300 max-w-[200px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] w-full contain-content">
      <Link
        className={`${!link ? "pointer-events-none" : ""}`}
        href={
          isListing
            ? `/d/${link}${docID ? `?type=${docID}` : ""}`
            : `/product-type/${link}`
        }
      >
        <Image
          width={150}
          height={300}
          alt={name}
          src={img?.[0]?.downloadURL}
          className="w-full h-auto fit-cover aspect-[3/4]"
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

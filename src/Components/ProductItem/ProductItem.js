import { usePathname } from "next/navigation";
import Image from "../Image";
import Link from "../Link";

const ProductItem = (props) => {
  const { item, productType } = props;
  const { link, name, img, price } = item;
  const pathname = usePathname();

  return (
    <Link
      className={`${!link ? "pointer-events-none" : ""}`}
      href={productType ? `/:${productType}/${link}` : `${pathname}/${link}`}
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
          <h1 className="text-lg">{name}</h1>
          {price && <p className="product_price">₹: {price}</p>}
        </div>
      )}
    </Link>
  );
};

export default ProductItem;

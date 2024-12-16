import Image from "@components/Image";

const ProductItem = (props) => {
  const { name, price, img, isListing } = props;

  return (
    <>
      <Image
        width={0}
        height={0}
        alt={name}
        src={img}
        className="w-full h-auto fit-cover aspect-[3/4] rounded-md"
      />
      {(name || price) && (
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-gray-900 to-transparent p-4 text-center text-white rounded-b-md">
          <h1 className="text-lg">{name}</h1>
          {price && <p className="product_price">₹: {price}</p>}
        </div>
      )}
    </>
  );
};

export default ProductItem;

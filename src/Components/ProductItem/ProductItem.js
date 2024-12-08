import Image from "@components/Image";

const ProductItem = (props) => {
  const { name, price, img, isListing } = props;

  return (
    <div className={`productItem_wrapper ${isListing ? "item_listing" : ""}`}>
      <div className="img_wrapper">
        <Image width={200} height={200} alt={name} src={img} />
      </div>
      <div className="text_wrapper">
        <p className="product_name">{name}</p>
        {price && <p className="product_price">₹: {price}</p>}
      </div>
    </div>
  );
};

export default ProductItem;

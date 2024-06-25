import { Image } from "react-bootstrap";
import "./productItem.scss";

const ProductItem = (props) => {
  const { name, price, img, isListing } = props;

  return (
    <div className={`productItem_wrapper ${isListing ? "item_listing" : ""}`}>
      <div className="img_wrapper">
        <Image
          className="product_img"
          alt={name}
          src={img}
          onError={(e) => (e.target.src = "asset/banner/placeholder.png")}
        />
      </div>
      <div className="text_wrapper">
        <p className="product_name">{name}</p>
        {price && <p className="product_price">₹: {price}</p>}
      </div>
    </div>
  );
};

export default ProductItem;

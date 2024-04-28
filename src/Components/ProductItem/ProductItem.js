import { Image } from "react-bootstrap";
import "./productItem.scss";

const ProductItem = ({ product, isListing }) => {
  return (
    <div className={`productItem_wrapper ${isListing ? "item_listing" : ""}`}>
      <div className="img_wrapper">
        <Image
          className="product_img"
          alt={product?.name}
          src={product?.img?.[0]?.downloadURL}
          onError={(e) => (e.target.src = "asset/banner/placeholder.png")}
        />
      </div>
      <div className="text_wrapper">
        <p className="product_name">{product?.name}</p>
        {product?.price && <p className="product_price">₹: {product?.price}</p>}
      </div>
    </div>
  );
};

export default ProductItem;

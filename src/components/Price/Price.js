const Price = (props) => {
  const {
    offerPrice,
    price,
    currency = "INR",
    locale = "en-IN",
    isPdp,
  } = props;

  const formatPrice = (amount) =>
    new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
    }).format(amount);

  return (
    <>
      {/* Show current price */}
      {offerPrice && (
        <span className="text-sm md:text-md font-semibold text-green-600 mr-1">
          {formatPrice(offerPrice)}
        </span>
      )}
      {/* Show original price if it exists */}
      {price && (
        <span
          className={`${
            offerPrice ? "line-through text-slate-800 text-sm" : "font-semibold"
          } text-sm ${isPdp ? "md:text-xl" : "md:text-md "}`}
        >
          {formatPrice(price)}
        </span>
      )}
    </>
  );
};

export default Price;

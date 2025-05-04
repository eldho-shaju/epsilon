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
      {/* Show offer price if it has */}
      {!!offerPrice && (
        <span className="text-xl md:text-2xl font-semibold text-green-600 mr-1">
          {formatPrice(offerPrice)}
        </span>
      )}
      {/* Show original price */}
      {!!price && (
        <span
          className={`${
            offerPrice
              ? "line-through text-slate-800 text-[14px] lg:text-[16px] ps-1"
              : "font-semibold"
          } text-sm ${isPdp && !offerPrice ? "md:text-xl" : "md:text-md "}`}
        >
          {formatPrice(price)}
        </span>
      )}
    </>
  );
};

export default Price;

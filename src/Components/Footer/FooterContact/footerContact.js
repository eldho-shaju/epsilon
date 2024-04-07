const FooterContact = (props) => {
  const { phone } = props;

  return (
    <div className="more_wrapper">
      <div className="more">
        <div className="more_title">
          <p className="title">
            Contact Us
            <span>&#x2935;</span>
          </p>
        </div>
        {phone?.contents &&
          phone?.contents?.length !== 0 &&
          phone?.contents?.map((data, index) => (
            <div key={index} className="address-box">
              <a className="link" href={`tel:${data?.link}`}>
                <span>{data?.phone}</span>
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FooterContact;

const FooterAddress = (props) => {
  const { address } = props;

  return (
    <div className="section_two">
      <div className="more_wrapper">
        <div className="more">
          <div className="more_title">
            <p className="title">
              Locate Us
              <span>&#x2935;</span>
            </p>
          </div>
          <div className="address-box">
            <a className="link" href={address?.contents?.[0]?.link}>
              <span>{address?.contents?.[0]?.content}</span>
            </a>
          </div>
        </div>
      </div>
      <div className="google_map_wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15249.811759671547!2d76.41107902187586!3d10.045863630610182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080b00a12b185d%3A0x1dbea5f7686e31d2!2sEpsilon%20Metal%20Furnishing!5e0!3m2!1sen!2sin!4v1712387592314!5m2!1sen!2sin"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default FooterAddress;

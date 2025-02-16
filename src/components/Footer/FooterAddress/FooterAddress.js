const FooterAddress = (props) => {
  const { address } = props;

  return (
    <div className="flex flex-col gap-4 md:w-1/2 items-center md:items-start border-t-2 border-gray-300 md:border-t-0 pt-2 md:pt-0 w-[90%]">
      <p className="font-semibold text-lg md:text-left text-center">
        <span className="hidden md:block">Locate us:</span>{" "}
        <span className="font-normal block mt-1">
          <a
            href={address?.contents?.[0]?.link}
            className="no-underline mt-2 text-sm"
          >
            {address?.contents?.[0]?.content}
          </a>
        </span>
      </p>
      <iframe
        className="h-[300px] w-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15249.811759671547!2d76.41107902187586!3d10.045863630610182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080b00a12b185d%3A0x1dbea5f7686e31d2!2sEpsilon%20Metal%20Furnishing!5e0!3m2!1sen!2sin!4v1712387592314!5m2!1sen!2sin"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade mt-2"
      ></iframe>
    </div>
  );
};

export default FooterAddress;

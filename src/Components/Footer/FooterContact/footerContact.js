const FooterContact = (props) => {
  const { phone } = props;

  return (
    phone?.contents &&
    phone?.contents?.length !== 0 && (
      <div className="flex flex-col gap-2 items-center justify-center">
        <p className="font-semibold text-lg">Contact us</p>
        <ul className="list-unstyled pt-2 inline-flex gap-4">
          {phone?.contents?.map((data, index) => (
            <li
              key={index}
              className="text-sm bg-white p-2 rounded shadow hover:shadow-lg ease-in-out duration-300 hover:scale-105"
            >
              <a href={`tel:${data?.link}`}>{data?.phone}</a>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default FooterContact;

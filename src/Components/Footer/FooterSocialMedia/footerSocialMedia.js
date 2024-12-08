import { Icon } from "@iconify/react";

const FooterSocialMedia = (props) => {
  const { social } = props;

  return (
    social?.contents &&
    social?.contents?.length !== 0 && (
      <div className="flex flex-col gap-2 items-center justify-center">
        <p className="font-semibold text-lg">Follow us on</p>
        <ul className="list-unstyled pt-2 inline-flex gap-4">
          {social?.contents?.map((ele) => (
            <li
              key={ele?.id}
              className="bg-white p-2 rounded shadow hover:shadow-lg ease-in-out duration-300 hover:scale-105"
            >
              <a href={ele?.link} target="_blank">
                <Icon icon={ele?.icon} width="1rem" height="1rem" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default FooterSocialMedia;

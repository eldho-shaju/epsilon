import { Icon } from "@iconify/react";

const FooterSocialMedia = (props) => {
  const { social } = props;

  return (
    <div className="social_icons">
      <p className="title">
        Follow us on
        <span>&#x2935;</span>
      </p>
      <div className="icons_wrapper">
        {social?.contents &&
          social?.contents?.length !== 0 &&
          social?.contents?.map((ele) => (
            <a
              className="social_link"
              href={ele?.link}
              target="_blank"
              key={ele?.id}
            >
              <div className={`icons ${ele?.id}`}>
                <Icon icon={ele?.icon} width="1rem" height="1rem" />
              </div>
            </a>
          ))}
      </div>
    </div>
  );
};

export default FooterSocialMedia;

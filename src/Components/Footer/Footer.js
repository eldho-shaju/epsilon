import { Icon } from "@iconify/react";
import useFooter from "./useFooter";
// import logo from "./logo.svg";
import LogoSvgWhite from "../Header/logo/logoSvgWhite";
import "./footer.scss";

const Footer = () => {
  const { data, error } = useFooter();

  if (data?.length < 1 || error) return;

  const leftContents =
    (data &&
      data?.length !== 0 &&
      data?.filter((ele) => ele?.type === "social")) ||
    [];
  const rightContents =
    (data &&
      data?.length !== 0 &&
      data?.filter((ele) => ele?.type === "right-side")) ||
    [];

  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_wrapper">
          <div className="section_one">
            <div className="logo_wrapper">
              {/* <img src={logo} alt="logo" className="logo" /> */}
              <LogoSvgWhite />
            </div>
          </div>
          <div className="section_two">
            <div className="more_wrapper">
              {rightContents &&
                rightContents?.length !== 0 &&
                rightContents?.map((data) => (
                  <div key={data?.title} className="more">
                    <div className="more_title">
                      <p className="title">
                        {data?.title}
                        <span>&#x2935;</span>
                      </p>
                    </div>
                    <div className="address-box">
                      <a className="link" href={data?.link}>
                        <span>{data?.content}</span>
                      </a>
                      {data?.id === "contactNo" && (
                        <>
                          ,{" "}
                          <a className="link" href={data?.link_two}>
                            <span>{data?.content_two}</span>
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                ))}
            </div>
            <div className="social_icons">
              <p className="title">
                Follow us on
                <span>&#x2935;</span>
              </p>
              <div className="icons_wrapper">
                {leftContents &&
                  leftContents.length !== 0 &&
                  leftContents.map((ele) => (
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
          </div>
        </div>
        <div className="developer">
          <p className="text">
            Developed by:{" "}
            <span>
              <a href="http://www.linkedin.com/in/eldhoshaju">ES</a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

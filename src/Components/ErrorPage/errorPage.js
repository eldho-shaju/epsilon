"use client";
import { useNavigate } from "";
import { Icon } from "@iconify/react";
import Container from "../Container/container";
import "./error.scss";
import { useEffect } from "react";

const customSettings = {
  desktop: {
    minWidth: 901,
    margin: "64px 0 0 0",
    height: "calc(100svh - 64px)",
  },
  tablet: {
    maxWidth: 900,
    minWidth: 600,
    margin: "64px 0 0 0",
    height: "calc(100svh - 64px)",
  },
  mobile: {
    maxWidth: 599,
    margin: "56px 0 0 0",
    height: "calc(100svh - 56px)",
  },
};

const ErrorPage = (props) => {
  const { errorMsg = "Something went wrong" } = props;
  const navigate = useNavigate();

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      navbar.classList.add("error");
    } else if (navbar) {
      navbar.classList.remove("error");
    }

    return () => {
      if (navbar) navbar.classList.remove("error");
    };
  }, []);

  return (
    <Container style={customSettings}>
      <div className="error_wrapper">
        <Icon
          icon={"ooui:error"}
          width="1.2rem"
          height="1.2rem"
          className="error_icon"
        />
        <h1 className="error_msg">
          {errorMsg}
          <span>
            ..!!
            <span className="blinking">!</span>
          </span>
        </h1>
        <div className="error_buttons">
          <button className="button home_button" onClick={() => navigate("/")}>
            Home
          </button>
          <button className="button back_button" onClick={() => navigate(-1)}>
            Go Back
          </button>
        </div>
      </div>
    </Container>
  );
};

export default ErrorPage;

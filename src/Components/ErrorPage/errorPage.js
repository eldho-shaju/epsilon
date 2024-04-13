import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import Container from "../Container/container";
import "./error.scss";

const ErrorPage = (props) => {
  const { errorMsg = "Something went wrong" } = props;
  const navigate = useNavigate();

  return (
    <Container backgroundColor="black">
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

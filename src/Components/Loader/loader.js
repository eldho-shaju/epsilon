import { Logo } from "../Header/logo/logo";
import "./loader.scss";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader_wrapper">
        <Logo />
      </div>
    </div>
  );
};

export default Loader;

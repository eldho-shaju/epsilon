import { Logo } from "../Header/Logo/logo";

const LoadingUI = () => {
  return (
    <div className="container mx-auto w-full flex justify-center items-center h-main">
      <div className="animate-bounce">
        <Logo />
      </div>
    </div>
  );
};

export default LoadingUI;

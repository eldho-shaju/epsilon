import Logo from "../Logo";

const LoadingAnimation = () => {
  return (
    <div className="container mx-auto w-full flex justify-center items-center h-main">
      <div className="animate-bounce">
        <Logo />
      </div>
    </div>
  );
};

export default LoadingAnimation;

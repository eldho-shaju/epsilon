import useDeviceTypeCheck from "./useDeviceTypeCheck";

const useShare = () => {
  const { isDesktop } = useDeviceTypeCheck();

  const handleShare = async (productName) => {
    if (!isDesktop) {
      try {
        await navigator.share({
          title: productName,
          text: `Check out this ${productName}!`,
          url: window.location.href,
        });
        console.log("Shared successfully");
      } catch (error) {
        console.error("Error sharing:", error);
      }
    }
  };

  return { handleShare };
};

export default useShare;

const useScrollToTop = () => {
  const handleScrollPosition = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return { handleScrollPosition };
};

export default useScrollToTop;

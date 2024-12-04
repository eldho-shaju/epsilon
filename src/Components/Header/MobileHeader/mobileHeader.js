const MobileHeader = () => {
  return (
    <>
      <MobileHeaderTitle />
      <MobileMenu state={state} toggle={toggle} />
      <OffcanvasMenu
        state={state}
        toggle={toggle}
        navMenu={navMenu}
        handleScrollPosition={handleScrollPosition}
      />
    </>
  );
};

export default MobileHeader;

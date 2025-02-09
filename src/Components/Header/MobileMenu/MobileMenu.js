import { useRef } from "react";
import useToggle from "@/hooks/useToggle";
import dynamic from "next/dynamic";

const MenuBody = dynamic(() => import("./MenuBody"), {
  ssr: false,
});

const MobileMenu = ({ navMenu }) => {
  const { handleClose, state, toggle } = useToggle();
  const buttonRef = useRef(null);

  return (
    <>
      <button
        ref={buttonRef}
        className="block md:hidden group relative w-10 h-[15px] flex flex-col justify-between items-center"
        onClick={toggle}
      >
        <span
          className={`block w-6 h-[1px] bg-black rounded transition-transform duration-300 ease-in-out
        ${state ? "rotate-45 translate-y-[7.1px]" : ""}`}
        ></span>
        <span
          className={`block w-6 h-[1px] bg-black rounded transition-opacity duration-300 ease-in-out
        ${state ? "opacity-0" : ""}`}
        ></span>
        <span
          className={`block w-6 h-[1px] bg-black rounded transition-transform duration-300 ease-in-out
        ${state ? "-rotate-45 -translate-y-[7.1px]" : ""}`}
        ></span>
      </button>
      <MenuBody
        state={state}
        handleClose={handleClose}
        navMenu={navMenu}
        buttonRef={buttonRef}
      />
    </>
  );
};

export default MobileMenu;

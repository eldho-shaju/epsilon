import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Icon } from "@iconify/react";

const MenuBody = (props) => {
  const router = useRouter();
  const pathname = usePathname();
  const menuRef = useRef(null);
  const { state, navMenu, handleClose, buttonRef } = props;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleRoute = (path) => {
    router.push(path);
    handleClose();
  };

  return (
    <>
      <div
        className={`fixed left-0 right-0 bottom-0 bg-black/50 z-40 top-mobileheader
    ${state ? "animate-fadeIn opacity-100" : "hidden animate-fadeOut opacity-0"}
    transition-opacity duration-300`}
      ></div>

      <div
        ref={menuRef}
        className={`fixed right-0 bottom-0 h-full w-64 bg-white shadow-lg transform ${
          state ? "translate-x-0 overflow-y-none" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 overflow-y-auto top-mobileheader`}
      >
        <ul className="p-4 space-y-4">
          {navMenu?.map((text) => {
            const isActive = pathname === text.link;
            return (
              <li key={text?.id}>
                <button
                  onClick={() => handleRoute(text?.link)}
                  className={`flex items-center gap-2 px-4 py-2 w-full rounded-lg transition text-sm ${
                    isActive ? "bg-primary text-white" : "text-gray-800"
                  }`}
                >
                  <Icon icon={text?.icon} width="24" height="24" />
                  <span>{text?.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default MenuBody;

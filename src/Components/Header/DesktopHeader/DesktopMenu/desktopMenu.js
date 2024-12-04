"use client";
import { usePathname } from "next/navigation";
import Link from "@components/Link";

const DesktopMenu = (props) => {
  const { navMenu } = props;
  const pathname = usePathname();

  return (
    navMenu &&
    navMenu?.length > 0 && (
      <nav className="flex align-center justify-center gap-x-6">
        {navMenu?.map((menu) => {
          // if (menu?.id === "home") return;
          const currentPath =
            pathname.includes(menu?.label.toLowerCase()) ||
            pathname === menu?.link;
          const active = currentPath ? "active" : "";
          return (
            <Link
              href={menu?.link}
              key={menu?.id}
              className={`inline-flex rounded-full px-3 py-1.5 text-slate-500 hover:text-indigo-500 [&.active]:bg-indigo-100 [&.active]:text-indigo-600 ${active}`}
            >
              {menu?.label}
            </Link>
          );
        })}
      </nav>
    )
  );
};

export default DesktopMenu;

import { Icon } from "@iconify/react/dist/iconify.js";
import { formatText } from "../../../../functions/formatText";
import { Logo } from "../../logo/logo";
import Link from "@components/Link";
import { usePathname, useRouter } from "next/navigation";

const MobileHeaderTitle = () => {
  const router = useRouter();
  const pathname = usePathname();

  const split = pathname?.split("/") || [];
  const name =
    split && split?.length > 0 ? split?.pop() : pathname ? pathname : "";
  const title = name && formatText(name);

  return (
    <div className="back_button_wrapper">
      <button className="back_button" onClick={() => router.back()}>
        <Icon
          className="back_icon"
          icon="material-symbols:arrow-back-ios-new-rounded"
        />
      </button>
      <Link href="/">
        <Logo />
      </Link>
      {title && <div className="title">{title}</div>}
    </div>
  );
};

export default MobileHeaderTitle;

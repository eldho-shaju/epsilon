import { FullLogo } from "../Header/logo/logo";
import FooterAddress from "./FooterAddress";
import FooterContact from "./FooterContact";
import FooterSocialMedia from "./FooterSocialMedia";
import DevelopedBy from "./DevelopedBy";
import useDeviceTypeCheck from "../../Hooks/useDeviceTypeCheck";
import useFooter from "./useFooter";
import "./footer.scss";

const Footer = () => {
  const { phone, social, address, error } = useFooter();
  const { isMobile } = useDeviceTypeCheck();

  if (error) return null;

  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_wrapper">
          <div className="section_one">
            <div className="logo_wrapper">
              <FullLogo />
            </div>
            {isMobile && <FooterAddress address={address} />}
            <FooterContact phone={phone} />
            <FooterSocialMedia social={social} />
          </div>
          {!isMobile && <FooterAddress address={address} />}
        </div>
        <DevelopedBy />
      </div>
    </footer>
  );
};

export default Footer;

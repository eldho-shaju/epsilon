import { Fragment } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import ContactusForm from "../../Components/ContactusForm";
import Loader from "../../Components/Loader";
import ErrorPage from "../../Components/ErrorPage";
import Container from "../../Components/Container";
import useContact from "./useContact";
import "./ContactUs.scss";

const customSettings = {
  backgroundColor: "black",
  color: "white",
  desktop: {
    minWidth: 901,
    margin: "64px 0 0 0",
  },
  tablet: {
    maxWidth: 900,
    minWidth: 600,
    margin: "64px 0 0 0",
  },
  mobile: {
    maxWidth: 599,
    margin: "56px 0 0 0",
  },
};

const ContactUs = () => {
  const { data, loading, error } = useContact();

  if (loading && !error) return <Loader />;
  if (error || (!loading && data?.length === 0)) return <ErrorPage />;

  const pageDescription =
    data && data?.length > 0 && data?.find((ele) => ele?.id === "page_desc");

  const phone =
    data && data?.length > 0 && data?.find((ele) => ele?.id === "phone");

  const primaryNumber =
    phone &&
    phone?.data?.length > 0 &&
    phone?.data?.find((ele) => ele?.preference === "primary");

  return (
    <Container style={customSettings}>
      <div className="contact_page_wrapper">
        <div className="page_description">
          <p className="text">{pageDescription?.content}</p>
        </div>
        <div className="form_wrapper phone">
          <div className="form_title">
            <p>
              <span>What's on</span>
              <span>your mind?</span>
              <span className="icon">
                <Icon icon="ic:sharp-double-arrow" />
              </span>
            </p>
          </div>
          <div className="phone_number_wrapper">
            <p className="phone_hint">Just tap the number to dial</p>
            <div className="phone_number_box">
              {phone?.data &&
                phone?.data?.length > 0 &&
                phone?.data?.map((ele, index) => (
                  <Fragment key={index}>
                    <a href={`tel:${ele?.link}`} className="phone_number">
                      {ele?.phone}
                    </a>
                  </Fragment>
                ))}
            </div>
          </div>
        </div>
        <div className="form_wrapper">
          <div className="form_title">
            <p>
              <span>Okay!</span>
              <span>Let's chat!</span>
              <span>
                <Icon icon="ic:sharp-double-arrow" />
              </span>
            </p>
          </div>
          <ContactusForm primaryNumber={primaryNumber} />
        </div>
      </div>
    </Container>
  );
};

export default ContactUs;

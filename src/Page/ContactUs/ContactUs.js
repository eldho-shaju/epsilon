import ContactusForm from "../../Components/ContactusForm";
import Loader from "../../Components/Loader";
import ErrorPage from "../../Components/ErrorPage";
import Container from "../../Components/Container";
import useContact from "./useContact";
import "./ContactUs.scss";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Fragment } from "react";

const ContactUs = () => {
  const { data, loading, error } = useContact();

  if (loading && !error) return <Loader />;
  if (error) return <ErrorPage />;

  const pageDescription =
    data && data?.length > 0 && data?.find((ele) => ele?.id === "page_desc");

  const phone =
    data && data?.length > 0 && data?.find((ele) => ele?.id === "phone");

  return (
    <Container backgroundColor="black">
      <div className="contact_page_wrapper">
        <div className="page_description">
          {/* <h2 className="title">{pageDescription?.title}</h2> */}
          <p className="text">{pageDescription?.content}</p>
        </div>
        <div className="form_wrapper">
          <div className="form_title">
            <p>
              <span>What's on</span>
              <span>your mind?</span>
              <span>
                <Icon icon="ic:sharp-double-arrow" />
              </span>
            </p>
          </div>
          <div className="phone_number_wrapper">
            {phone?.data &&
              phone?.data?.length > 0 &&
              phone?.data?.map((ele, index) => (
                <Fragment key={index}>
                  <a href={`tel:${ele?.link}`} className="phone_number">
                    {ele?.phone}
                  </a>
                  <br />
                </Fragment>
              ))}
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
          <ContactusForm />
        </div>
      </div>
    </Container>
  );
};

export default ContactUs;

import ContactusForm from "../../Components/ContactusForm/ContactusForm";
import "./ContactUs.scss";
import useContact from "./useContact";
import Loader from "../../Components/Loader";
import ErrorPage from "../../Components/ErrorPage";
import Container from "../../Components/Container/container";

const ContactUs = () => {
  const { data, loading, error } = useContact();

  if (loading && !error) return <Loader />;
  if (error) return <ErrorPage />;

  const [contactUs] = data;

  return (
    <Container backgroundColor="black">
      <div className="contact_page_wrapper">
        <h2 className="title">{contactUs?.title}</h2>
        <p className="text">{contactUs?.content}</p>
        <div className="form_wrapper">
          <ContactusForm />
        </div>
      </div>
    </Container>
  );
};

export default ContactUs;

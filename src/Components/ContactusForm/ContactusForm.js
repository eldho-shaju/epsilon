import { Form, Input, TextArea, useFormApi } from "informed";
import "./contactForm.scss";

const ContactusForm = () => {
  const formApiRef = useFormApi();

  const handleSubmit = (formValue) => {
    const { values } = formValue;
    const whatsappMessage = `Hi, I'm ${values.name} from ${values.place}.%0AI want to know that ${values.message}`;
    const whatsappURL = `https://api.whatsapp.com/send?phone=918075516126&text=${whatsappMessage}`;

    window.open(whatsappURL, "_blank");
    formApiRef.current.reset();
  };

  return (
    <Form
      onSubmit={handleSubmit}
      formApiRef={formApiRef}
      className="contact-form"
    >
      <Input
        label="Name"
        name="name"
        type="text"
        placeholder="Your Name"
        required
        autoComplete="false"
        autoCapitalize="on"
        className="input-group"
      />
      <Input
        name="place"
        label="Place"
        type="text"
        placeholder="Your Location"
        autoCapitalize="on"
        required
        className="input-group"
      />
      <TextArea
        label="Message"
        name="message"
        type="text"
        placeholder="Ask Something"
        required
        autoCapitalize="on"
        className="input-group text-area"
        style={{}}
      />
      <button type="submit" className="form_button">
        Send Message
      </button>
    </Form>
  );
};

export default ContactusForm;

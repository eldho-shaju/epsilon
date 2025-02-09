import { Form, Input, TextArea, useFormApi } from "informed";
import "./contactForm.css";

const ContactusForm = ({ primaryNumber }) => {
  const formApiRef = useFormApi();

  const whatsAppNumber = primaryNumber && primaryNumber?.link?.replace("+", "");

  const handleSubmit = (formValue) => {
    const { values } = formValue;
    const whatsappMessage = `Hi, I'm ${values?.name} from ${values?.place}. 
${values?.message}`;

    const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsAppNumber}&text=${whatsappMessage}`;

    window.open(whatsappURL, "_blank");
    formApiRef.current.reset();
  };

  return (
    <Form
      onSubmit={handleSubmit}
      formApiRef={formApiRef}
      className="contact-form bg-white p-4 rounded-[20px] flex flex-col gap-1 items-start justify-center prose text-sm w-full md:w-[50%] lg:w-[40%]"
    >
      <Input
        label="Name"
        name="name"
        type="text"
        placeholder="Your Name"
        required
        autoComplete="false"
        autoCapitalize="on"
        className="text-md rounded-md p-2.5 bg-[#7a4f4f] text-sm w-full p-2.5 border-none text-white placeholder:text-white focus:outline-none focus:ring-0"
      />
      <Input
        name="place"
        label="Place"
        type="text"
        placeholder="Your Location"
        autoCapitalize="on"
        required
        className="text-md rounded-md p-2.5 bg-[#7a4f4f] text-sm w-full p-2.5 border-none text-white placeholder:text-white focus:outline-none focus:ring-0"
      />
      <TextArea
        label="Message"
        name="message"
        type="text"
        placeholder="Ask Something"
        required
        autoCapitalize="on"
        className="text-md rounded-md p-2.5 bg-[#7a4f4f] text-sm w-full p-2.5 border-none text-white placeholder:text-white focus:outline-none focus:ring-0"
      />
      <div className="flex justify-end w-full mt-4">
        <button
          type="submit"
          className="btn text-maroon bg-natural_gray py-2 px-2 rounded-md hover:bg-[#7a4f4f] hover:text-white ease-in-out duration-300"
        >
          Send Message
        </button>
      </div>
    </Form>
  );
};

export default ContactusForm;

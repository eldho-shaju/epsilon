import { notFound } from "next/navigation";
import ContactUs from "@/pageRoutes/ContactUs";
import { getFirebaseData } from "@/utils/getFirebaseData";

const ContactUsPage = async () => {
  const { data } = await getFirebaseData({ collectionName: "contact" });

  if (!data) {
    notFound();
  }

  return <ContactUs data={data} />;
};

export default ContactUsPage;

import { notFound } from "next/navigation";
import { getFirebaseData } from "@/utils/getFirebaseData";
import Contact from "../../pageRoutes/Contact";

const ContactUsPage = async () => {
  const { data } = await getFirebaseData({ collectionName: "contact" });

  if (!data) {
    notFound();
  }

  return <Contact data={data} />;
};

export default ContactUsPage;

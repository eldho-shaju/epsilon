import { notFound } from "next/navigation";
import AboutUs from "@/pageRoutes/AboutUs";
import { getFirebaseData } from "@/utils/getFirebaseData";

const AboutPage = async () => {
  const { data } = await getFirebaseData({ collectionName: "about" });

  if (!data) {
    notFound();
  }

  return <AboutUs data={data} />;
};

export default AboutPage;

import AboutUsWidget from "../../Widget/AboutUsWidget";
import useAbout from "./useAbout";

const AboutUs = () => {
  const { data, loading, error } = useAbout();
  return <AboutUsWidget data={data} loading={loading} error={error} />;
};

export default AboutUs;

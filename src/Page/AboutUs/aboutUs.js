import DOMPurify from "dompurify";
import Loader from "../../Components/Loader";
import ErrorPage from "../../Components/ErrorPage";
import useAbout from "./useAbout";
import "./aboutUs.scss";

const AboutUs = () => {
  const { data, loading, error } = useAbout();

  if (loading) return <Loader />;
  if (error) return <ErrorPage />;

  return (
    <section className="about_container">
      <div className="about_wrapper">
        {data &&
          data?.length > 0 &&
          data?.map((data) => {
            const banner =
              data?.type === "with-img" && data?.img?.[0]?.downloadURL;
            return (
              <div key={data.id} className={`content_wrapper ${data?.type}`}>
                {banner && (
                  <div className="img_wrapper">
                    <img
                      src={banner}
                      alt="about-us banner"
                      className="banner"
                    />
                  </div>
                )}
                <div className="para_wrapper">
                  <h1 className="title">{data?.title}</h1>
                  {data?.type === "multi-para" ? (
                    <div
                      className="text"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(data?.content),
                      }}
                    />
                  ) : (
                    <p className="text">{data?.content}</p>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default AboutUs;

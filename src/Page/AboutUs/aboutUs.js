"use client";
import DOMPurify from "dompurify";
import Loader from "../../Components/Loader";
import ErrorPage from "../../Components/ErrorPage";
import useAbout from "./useAbout";
import Image from "@/components/Image";

const AboutUs = () => {
  const { data, loading, error } = useAbout();

  if (loading) return <Loader />;
  if (error || (!loading && data?.length === 0)) return <ErrorPage />;

  return (
    <section className="">
      <div className="about_wrapper">
        {data &&
          data?.length > 0 &&
          data?.map((data) => {
            const banner =
              data?.type === "with-img" && data?.img?.[0]?.downloadURL;
            return (
              <div key={data.id} className={`content_wrapper ${data?.type}`}>
                <div className="contents">
                  {banner && (
                    <div className="img_wrapper">
                      <Image
                        src={banner}
                        alt="about-us banner"
                        className="banner"
                        width={500}
                        height={500}
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
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default AboutUs;

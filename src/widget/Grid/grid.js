"use client";
import Image from "@/components/Image";

const WidgetGrid = (props) => {
  const { grid } = props;

  const content = grid && grid?.content;

  return (
    content &&
    content?.length > 0 && (
      <section className="py-4 md:py-8">
        <div className="lg:container mx-mobile_margin lg:mx-auto flex flex-wrap items-center justify-center gap-2">
          {content?.map((widget, index) => {
            const direction =
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse";
            return (
              <div key={widget?.id} className={`flex flex-col ${direction}`}>
                <div className="w-full lg:w-1/2 flex justify-center items-center mb-4 ">
                  <Image
                    src={widget?.img?.[0]?.downloadURL}
                    width={400}
                    height={400}
                    alt={widget?.title}
                    className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 40vw, 30vw"
                    quality={80}
                  />
                </div>
                <div className="flex flex-col justify-center px-2 md:px-8 py-4 md:py-0 w-full lg:w-1/2">
                  <h3 className="text-xl md:text-3xl font-medium mb-4 text-center md:text-left">
                    {widget?.title}
                  </h3>
                  <p className="text-justify text-sm md:text-base leading-mobile_line_height">
                    {widget?.para}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    )
  );
};

export default WidgetGrid;

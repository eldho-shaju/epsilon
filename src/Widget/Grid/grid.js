"use client";
import Image from "@/components/Image";
import useDeviceTypeCheck from "@/hooks/useDeviceTypeCheck";

const WidgetGrid = (props) => {
  const { grid } = props;
  const { isMobile } = useDeviceTypeCheck();

  const content = grid && grid?.content;

  return (
    content &&
    content?.length > 0 && (
      <section className="md:container mx-mobile_margin md:mx-auto py-4 md:py-8">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {content?.map((widget, index) => {
            const direction = index % 2 === 0 ? "flex-row" : "flex-row-reverse";
            return (
              <div
                key={widget?.id}
                className={`flex ${isMobile ? "flex-col" : direction}`}
              >
                <Image
                  src={widget?.img?.[0]?.downloadURL}
                  width={480}
                  height={80}
                />
                <div className="flex flex-col justify-center px-2 md:px-8 py-4 md:py-0">
                  <h3 className="text-xl md:text-3xl font-medium mb-4 text-center md:text-left">
                    {widget?.title}
                  </h3>
                  <p className="text-justify text-sm md:text-base leading-6">
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

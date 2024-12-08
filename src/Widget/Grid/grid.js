import Image from "@components/Image";

const WidgetGrid = (props) => {
  const { grid } = props;
  const content = grid && grid?.content;

  return (
    content &&
    content?.length > 0 && (
      <section className="container mx-auto py-8">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {content?.map((widget, index) => {
            const direction = index % 2 === 0 ? "flex-row" : "flex-row-reverse";
            return (
              <div key={widget?.id} className={`flex ${direction}`}>
                <Image
                  src={widget?.img?.[0]?.downloadURL}
                  width={480}
                  height={80}
                />
                <div className="flex flex-col justify-center px-8">
                  <h3 className="text-3xl font-medium mb-4">{widget?.title}</h3>
                  <p>{widget?.para}</p>
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

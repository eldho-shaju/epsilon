import Container from "../../Components/Container/container";
import "./grid.scss";

const WidgetGrid = ({ grid }) => {
  const content = grid && grid?.[0]?.content;

  return (
    <Container backgroundColor="white" isSecondWidget>
      <div className="grid_wrapper">
        {content &&
          content?.length > 0 &&
          content?.map((widget, index) => {
            const direction = index % 2 === 0 ? "item-row" : "item-row-reverse";
            return (
              <div
                key={widget?.id}
                className={`grid_item_wrapper ${direction} `}
              >
                <div className="img_wrapper">
                  <img className="img" src={widget?.img?.[0]?.downloadURL} />
                </div>
                <div className="text_wrapper">
                  <h3 className="title">{widget?.title}</h3>
                  <p className="para">{widget?.para}</p>
                </div>
              </div>
            );
          })}
      </div>
    </Container>
  );
};

export default WidgetGrid;

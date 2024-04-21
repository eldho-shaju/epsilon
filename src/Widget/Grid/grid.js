import Container from "../../Components/Container/container";
import Shimmer from "./Shimmer";
import "./grid.scss";

const WidgetGrid = (props) => {
  const { grid, loading } = props;
  const content = grid && grid?.content;

  if (loading) return <Shimmer />;

  return (
    <Container>
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

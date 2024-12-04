import Container from "../../../components/Container/container";
import "./shimmer.scss";

const Shimmer = () => {
  return (
    <Container>
      <div className="grid_wrapper">
        {[...Array(4)]?.map((val, index) => {
          const direction = index % 2 === 0 ? "item-row" : "item-row-reverse";
          return (
            <div key={index} className={`grid_item_wrapper ${direction}`}>
              <div className="img_wrapper_shimmer">
                <div className="img"></div>
              </div>
              <div className="text_wrapper">
                <h3 className="title_shimmer"></h3>
                <p className="para_shimmer"></p>
                <p className="para_shimmer"></p>
                <p className="para_shimmer"></p>
                <p className="para_shimmer"></p>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Shimmer;

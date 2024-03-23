import "./container.scss";

const Container = (props) => {
  const { children, backgroundColor, isSecondWidget } = props;

  return (
    <section
      className={`component_container ${backgroundColor} ${
        isSecondWidget ? "second_widget" : ""
      }`}
    >
      <div className="container_wrapper">{children}</div>
    </section>
  );
};

export default Container;

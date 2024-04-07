import "./container.scss";

const Container = (props) => {
  const { children, backgroundColor, isSecondWidget, ...rest } = props;

  return (
    <section
      className={`component_container ${backgroundColor} ${
        isSecondWidget ? "second_widget" : ""
      }`}
      {...rest}
    >
      <div className="container_wrapper">{children}</div>
    </section>
  );
};

export default Container;

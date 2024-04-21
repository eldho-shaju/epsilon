import "./shimmer.scss";

const Shimmer = () => {
  return (
    <div className="nav_menu_wrapper">
      {[...Array(4)]?.map((index) => (
        <div key={index} className={`nav_links_shimmer`}>
          <span className={`link-text `}></span>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;

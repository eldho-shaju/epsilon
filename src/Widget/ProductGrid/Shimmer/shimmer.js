import React from "react";
import { Container } from "react-bootstrap";
import "./shimmer.scss";
import { Icon } from "@iconify/react/dist/iconify.js";

const customSettings = {
  desktop: {
    minWidth: 901,
    margin: "0 0 0 0",
  },
  tablet: {
    maxWidth: 900,
    minWidth: 600,
    margin: "0 0 0 0",
  },
  mobile: {
    maxWidth: 599,
    margin: "56px 0 0 0",
  },
};

const Shimmer = () => {
  return (
    <Container>
      <div className="product_grid_wrapper">
        <div className="product_container">
          <p className="title">Our collections</p>
          <div className="item_container">
            {[...Array(4)]?.map((index) => (
              <div className="items_wrapper" key={index}>
                <div className="item_wrapper_link">
                  <div className={`productItem_wrapper`}>
                    <div className="img_wrapper">
                      <div className="product_img"></div>
                    </div>
                    <div className="text_wrapper_shimmer"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="view_all_wrapper">
          <div className="view_all_button">
            <div className="link_shimmer">
              View All
              <Icon icon="mdi:arrow-left-thin" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Shimmer;

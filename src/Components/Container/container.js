import styled from "styled-components";
import "./container.scss";

const StyledSection = styled.section`
  background-color: ${(props) => props?.style?.backgroundColor || "white"};
  color: ${(props) => props?.style?.color || "black"};
  height: ${(props) => props?.style?.height || "fit-content"};
  @media only screen and (min-width: ${(props) =>
      props?.style?.desktop?.minWidth || "unset"}px) {
    margin: ${(props) => props?.style?.desktop?.margin || "0 0 0 0"};
  }
  @media only screen and (min-width: ${(props) =>
      props?.style?.tablet?.minWidth || "unset"}px) and (max-width: ${(props) =>
      props?.style?.tablet?.maxWidth || "unset"}px) {
    margin: ${(props) => props?.style?.tablet?.margin || "0 0 0 0"};
  }
  @media only screen and (max-width: ${(props) =>
      props?.style?.mobile?.maxWidth || "unset"}px) {
    margin: ${(props) => props?.style?.mobile?.margin || "0 0 0 0"};
  }
`;

const Container = (props) => {
  const { children, style } = props;

  return (
    <StyledSection className={`component_container`} style={style}>
      <div className="container_wrapper">{children}</div>
    </StyledSection>
  );
};

export default Container;

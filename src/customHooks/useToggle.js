import { useState } from "react";

const useToggle = () => {
  const [state, setState] = useState(false);
  const toggle = () => setState((prevState) => !prevState);
  const handleOpen = () => setState(true);
  const handleClose = () => setState(false);

  return { state, toggle, handleOpen, handleClose };
};

export default useToggle;

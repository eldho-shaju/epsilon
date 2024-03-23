import { useCallback, useMemo, useState } from "react";

const useToggle = () => {
  const [state, setState] = useState(false);
  const toggle = useCallback(() => setState((prevState) => !prevState), []);
  const handleOpen = useCallback(() => setState(true), []);
  const handleClose = useCallback(() => setState(false), []);

  const values = useMemo(() => {
    return { state, toggle, handleOpen, handleClose };
  }, [state, toggle, handleOpen, handleClose]);

  return values;
};

export default useToggle;

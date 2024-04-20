import { useEffect, useState } from "react";

const useGlobalHook = () => {
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setRefresh(true), 6000 * 3600);

    return () => {
      clearTimeout(id);
    };
  }, []);

  return { refresh };
};

export default useGlobalHook;

import { useEffect, useState } from "react";
import {
  getFromLocalStorage,
  setToLocalStorage,
} from "../../functions/localStorage";
import useGetData from "../../Hooks/useGetData";

const useHome = () => {
  const { getData } = useGetData();
  const cachedData = JSON.parse(getFromLocalStorage(`homeWidgets`));
  const [widget, setWidget] = useState(cachedData || []);
  const dataLength = widget?.length > 0;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const widgetData = await getData("homeWidgets");
        if (widgetData) {
          setWidget(widgetData);
          setToLocalStorage("homeWidgets", widgetData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    if (!!dataLength) {
      setLoading(false);
    } else {
      fetchData();
    }
  }, []);

  const banner =
    (widget &&
      widget?.length > 0 &&
      widget?.find((ele) => ele?.type === "banner")) ||
    {};

  const grid =
    (widget &&
      widget?.length > 0 &&
      widget?.find((ele) => ele?.type === "four-grid")) ||
    {};

  return { grid, banner, loading, error, widget };
};

export default useHome;

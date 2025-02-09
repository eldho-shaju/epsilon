import { useEffect, useState } from "react";
import { getFirebaseData } from "@/utils/getFirebaseData";

const useHome = () => {
  const [widget, setWidget] = useState([]);
  const dataLength = widget?.length > 0;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const widgetData = await getFirebaseData("homeWidgets");
        if (widgetData) {
          setWidget(widgetData);
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

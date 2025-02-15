import HomePage from "@/pageRoutes/HomePage";
import { getFirebaseData } from "@/utils/getFirebaseData";

const Home = async () => {
  const { data: widgetData } = await getFirebaseData({
    collectionName: "homeWidgets",
  });

  const { data } = await getFirebaseData({ collectionName: "product-type" });

  return <HomePage widgetData={widgetData} data={data} />;
};

export default Home;

import ErrorUi from "@/components/ErrorUi";
import ProductDetailPage from "@/pageRoutes/ProductDetailPage";
import { getFirebaseData } from "@/utils/getFirebaseData";

export async function generateMetadata({ params, searchParams }) {
  const { url } = await params;
  const { type } = (await searchParams) || {};
  const { data } = await getFirebaseData({
    collectionName: "product_details",
    docID: type,
    subCollection: "type",
    key: url,
  });

  return {
    title: data?.name,
    openGraph: {
      siteName: "Epsilon",
      images: [
        {
          url: data?.image?.[0]?.downloadURL
            ? data?.image?.[0]?.downloadURL
            : `/assets/images/logo.png`,
          width: 1200,
          height: 630,
        },
      ],
      title: data?.name,
      type: "website",
      url: `https://epsilon-furnishing.vercel.app/d/${url}?type=${type}`,
    },
    alternates: {
      canonical: `https://epsilon-furnishing.vercel.app/d/${url}?type=${type}`,
      languages: {
        en: `https://epsilon-furnishing.vercel.app/d/${url}?type=${type}`,
      },
    },
  };
}

const DetailPage = async ({ params, searchParams }) => {
  const { url } = await params;
  const { type } = (await searchParams) || {};
  const { data } = await getFirebaseData({
    collectionName: "product_details",
    docID: type,
    subCollection: "type",
    key: url,
  });

  if (!data) return <ErrorUi />;

  return <ProductDetailPage item={data} type={type} />;
};

export default DetailPage;

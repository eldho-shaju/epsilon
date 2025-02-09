import ProductListing from "@/pageRoutes/ProductListing";

const ListingPage = async ({ params }) => {
  const { list } = await params;

  return <ProductListing subCollection={list} />;
};

export default ListingPage;

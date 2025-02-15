import ProductListing from "@/pageRoutes/ProductListing";

const ListingPage = async ({ params }) => {
  const { list } = await params;

  return <ProductListing docID={list} />;
};

export default ListingPage;

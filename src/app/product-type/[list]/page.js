import ProductListing from "../../../page/ProductListing";

const ListingPage = ({ params }) => {
  const { list } = params;

  return <ProductListing subCollection={list} />;
};

export default ListingPage;

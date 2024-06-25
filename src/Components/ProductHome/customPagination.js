import { Pagination } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const CustomPagination = (props) => {
  const { hasMore } = props;
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;

  const handlePrev = () => {
    const params = { page: page - 1 };
    if (page > 1) {
      setSearchParams({});
    } else {
      searchParams({ params });
    }
  };

  const handleNext = () => {
    const params = { page: page + 1 };
    setSearchParams(params);
  };

  return (
    <Pagination>
      <Pagination.Prev onClick={handlePrev} disabled={page < 2} />
      <Pagination.Item active>{page}</Pagination.Item>
      <Pagination.Next onClick={handleNext} disabled={!hasMore} />
    </Pagination>
  );
};

export default CustomPagination;

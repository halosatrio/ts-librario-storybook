import range from "lodash/range";
import propTypes from "prop-types";

type PaginationProps = {
  itemsCount: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({
  itemsCount,
  pageSize,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;

  const pages = range(1, pagesCount + 1);

  return (
    <ul className="pagination">
      {pages.map((page, index) => (
        <li
          key={index}
          className={page === currentPage ? "page-item active" : "page-item"}
        >
          <a className="page-link" onClick={() => onPageChange(page)}>
            {page}
          </a>
        </li>
      ))}
    </ul>
  );
};

Pagination.propTypes = {
  itemsCount: propTypes.number.isRequired,
  pageSize: propTypes.number.isRequired,
  currentPage: propTypes.number.isRequired,
  onPageChange: propTypes.func.isRequired,
};

export default Pagination;

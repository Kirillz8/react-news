export interface IPaginationProps {
  totalPages: number;
  handlePreviousPage: () => void;
  handlePageClick: (page: number) => void;
  handleNextPage: () => void;
  currentPage: number;
}

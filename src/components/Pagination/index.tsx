import React from 'react';
import styles from './Pagination.module.scss';
import ReactPaginate from 'react-paginate';

type PaginationProps = {
  onChangePage: (page: number) => void;
  currentPage: number;
};

const Pagination: React.FC<PaginationProps> = ({ onChangePage, currentPage }) => (
  <ReactPaginate
    className={styles.root}
    breakLabel="..."
    nextLabel=">"
    previousLabel="<"
    onPageChange={(event) => onChangePage(event.selected + 1)}
    pageRangeDisplayed={8}
    pageCount={2}
    forcePage={currentPage - 1}
  />
);

export default Pagination;

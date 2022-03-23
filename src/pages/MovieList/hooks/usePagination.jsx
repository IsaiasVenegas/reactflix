import { useState, useEffect } from "react";

/**
 * Manage pagination
 */
const usePagination = (list) => {
  const [pagination, setPagination] = useState({
    page: 0,
    page_size: 12,
  });

  const setPage = (p) => {
    setPagination((pag) => ({ ...pag, page: p }));
  };

  const setPageSize = (p) => {
    setPagination((pag) => ({ ...pag, page_size: p }));
  };

  // Move to the first page if the list has changed
  useEffect(() => {
    setPage(0);
  }, [list, pagination.page_size]);

  return [pagination, setPage, setPageSize];
};

export default usePagination;

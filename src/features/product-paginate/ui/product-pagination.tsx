import { Pagination } from "@mui/material";
import { useProductPagination } from "../model/use-product-pagination";

export function ProductPagination() {
  const { page, maxPage, setPage } = useProductPagination();

  return (
    <Pagination
      sx={{ marginTop: "10px" }}
      count={maxPage}
      page={page}
      onChange={(_, page) => setPage(page)}
      boundaryCount={2}
      siblingCount={1}
    />
  );
}

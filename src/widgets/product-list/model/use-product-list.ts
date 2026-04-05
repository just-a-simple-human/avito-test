import { useProductPagination } from "@/features/product-paginate";
import {
  useProductFilter,
  categoryAdapter,
  sortAdapter,
} from "@/features/product-filter";
import { useProductGetAllQuery } from "@/entities/product";
import { useEffect, useMemo } from "react";

export function useProductList() {
  const { page, setMaxPage } = useProductPagination();

  const { categories, incompleteOnly, searchQuery, sortValue } =
    useProductFilter();

  const categoriesParam = useMemo(
    () => categoryAdapter.adapt(categories),
    [categories],
  );
  const sortParams = useMemo(() => sortAdapter.adapt(sortValue), [sortValue]);

  const { data } = useProductGetAllQuery({
    page,
    categories: categoriesParam,
    q: searchQuery,
    needsRevision: incompleteOnly,
    sortColumn: sortParams?.sortColumn,
    sortDirection: sortParams?.sortDirection,
  });

  useEffect(() => {
    if (data?.total) setMaxPage(Math.ceil(data.total / 10));
  }, [data?.total, setMaxPage]);

  return { data };
}

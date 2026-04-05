import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { productApi } from "../api/product-api";

type ProductGetAllQueryParams = {
  q?: string;
  page: number;
  needsRevision?: boolean;
  categories?: string;
  sortColumn?: string;
  sortDirection?: string;
};

export function useProductGetAllQuery(params: ProductGetAllQueryParams) {
  return useQuery({
    queryKey: [
      "product",
      `page=${params.page}`,
      `q=${params.q}`,
      `categories=${params.categories}`,
      `sortColumn=${params.sortColumn}`,
      `sortDirection=${params.sortDirection}`,
    ],
    async queryFn() {
      const { data } = await productApi.getAll({
        q: params.q,
        limit: 10,
        skip: (params.page - 1) * 10,
        categories: params.categories,
        needsRevision: params.needsRevision || undefined,
        sortColumn: params.sortColumn,
        sortDirection: params.sortDirection,
      });
      return data;
    },
    placeholderData: keepPreviousData,
  });
}

export function useProductGetOneByIdQuery(id: number) {
  return useQuery({
    queryKey: ["product", `id=${id}`],
    async queryFn() {
      const { data } = await productApi.getOneById(id);
      return data;
    },
  });
}

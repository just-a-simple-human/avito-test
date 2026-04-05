import { api } from "@/shared/api/api";
import type { IProduct } from "../model/types";

type GetAllProductParams = Partial<{
  q: string;
  limit: number;
  skip: number;
  needsRevision: boolean;
  categories: string;
  sortColumn: string;
  sortDirection: string;
}>;

export const productApi = {
  async getAll(params?: GetAllProductParams) {
    return await api.get<{ total: number; items: IProduct[] }>("items", {
      params,
    });
  },
  async getOneById(id: number) {
    return await api.get<IProduct>(`items/${id}`);
  },
  async update(id: number, data: IProduct) {
    return await api.put<unknown, unknown, IProduct>(`items/${id}`, data);
  },
};

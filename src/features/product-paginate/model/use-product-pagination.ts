import { create } from "zustand";

interface IProductPaginationState {
  page: number;
  setPage(page: number): void;
  nextPage(): void;
  prevPage(): void;
  maxPage?: number;
  setMaxPage(maxPage: number): void;
}

export const useProductPagination = create<IProductPaginationState>((set) => ({
  page: 1,
  setPage(page: number) {
    set({ page });
  },
  nextPage() {
    set((state) => ({ page: state.page + 1 }));
  },
  prevPage() {
    set((state) => ({ page: Math.max(state.page - 1, 1) }));
  },
  setMaxPage(maxPage) {
    set({ maxPage });
  },
}));

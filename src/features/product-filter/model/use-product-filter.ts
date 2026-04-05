import type { AvailableCategories } from "@/shared/type/categories.type";
import { create } from "zustand";
type ViewMode = "grid" | "list";

interface IProductFilterStateData {
  searchQuery: string;
  viewMode: ViewMode;
  sortValue: string;
  categories: Record<string, boolean>;
  incompleteOnly: boolean;
}

interface IProductFilterState extends IProductFilterStateData {
  setSearchQuery(value: string): void;
  setViewMode(mode: ViewMode): void;
  setSortValue(value: string): void;
  toggleCategory(category: AvailableCategories, checked: boolean): void;
  setIncompleteOnly(value: boolean): void;
  resetFilters(): void;
}

const initialState: IProductFilterStateData = {
  searchQuery: "",
  viewMode: "grid",
  sortValue: "new",
  categories: {
    auto: false,
    electronics: false,
    real_estate: false,
  },
  incompleteOnly: false,
};

export const useProductFilter = create<IProductFilterState>((set) => ({
  ...initialState,
  setSearchQuery(value) {
    set({ searchQuery: value });
  },
  setViewMode(mode) {
    set({ viewMode: mode });
  },
  setSortValue(value) {
    set({ sortValue: value });
  },
  toggleCategory(category, checked) {
    set((state) => ({
      categories: {
        ...state.categories,
        [category]: checked,
      },
    }));
  },
  setIncompleteOnly(value) {
    set({ incompleteOnly: value });
  },
  resetFilters() {
    set(initialState);
  },
}));

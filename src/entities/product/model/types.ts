import type { AvailableCategories } from "@/shared/type/categories.type";

export interface IProduct {
  category: AvailableCategories;
  title: string;
  price: number;
  needsRevision: boolean;
  id: number;
  description?: string;
  createdAt: string;
  updatedAt: string;
  params: Partial<Record<string, unknown>>;
}

import { ProductListPage } from "@/pages/product";
import { ProductSinglePage } from "@/pages/product-single";
import { ProductEditPage } from "@/pages/product-edit";
import { Routes, Route } from "react-router";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<ProductListPage />} />
      <Route path="/ads" element={<ProductListPage />} />
      <Route path="/ads/:id" element={<ProductSinglePage />} />
      <Route path="/ads/:id/edit" element={<ProductEditPage />} />
    </Routes>
  );
}

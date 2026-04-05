import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductEditSchema, type ProductEditSchemaType } from "./schema";

export function useProductEditForm(currentState: ProductEditSchemaType) {
  return useForm({
    values: { ...currentState },
    resolver: zodResolver(ProductEditSchema),
  });
}

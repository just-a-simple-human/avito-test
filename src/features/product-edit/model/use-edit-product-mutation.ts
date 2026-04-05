import type { IProduct } from "@/entities/product";
import { productApi } from "@/entities/product/api/product-api";
import { useMutation } from "@tanstack/react-query";

export function useEditProductMutation({ id }: IProduct) {
  return useMutation<unknown, Error, IProduct>({
    mutationKey: ["product", "edit", `id=${id}`],
    async mutationFn(data) {
      return productApi.update(id, data);
    },
  });
}

import { Box } from "@mui/material";
import {
  ProductSortSelect,
  ProductToggleView,
  ProductSearchInput,
} from "@/features/product-filter";

export function ProductSearchBar() {
  return (
    <Box
      component="header"
      bgcolor={"#ffffff"}
      padding={"12px"}
      sx={{ height: "fit-content", display: "flex", borderRadius: "8px" }}
    >
      <ProductSearchInput />
      <ProductToggleView />
      <ProductSortSelect />
    </Box>
  );
}

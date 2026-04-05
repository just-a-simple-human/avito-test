import { Box, Typography } from "@mui/material";
import { ProductSearchBar } from "@/widgets/product-search-bar";
import { ProductAsideFilter } from "@/widgets/product-aside-filters";
import { ProductList } from "@/widgets/product-list";

export function ProductListPage() {
  return (
    <Box
      bgcolor="#F7F5F8"
      paddingInline="32px"
      paddingTop="12px"
      paddingBottom="24px"
    >
      <Box paddingBlock={"12px"}>
        <Typography variant="h6" component="h1">
          Мои объявления
        </Typography>
        <Typography>42 объявления</Typography>
      </Box>

      <ProductSearchBar />

      <Box marginTop="16px" display="flex" gap="24px">
        <ProductAsideFilter />
        <ProductList />
      </Box>
    </Box>
  );
}

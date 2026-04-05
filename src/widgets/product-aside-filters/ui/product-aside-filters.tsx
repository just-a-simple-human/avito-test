import { Box, Divider, Typography } from "@mui/material";
import {
  ProductCategorySelect,
  ProductIncompliteOnlySwitch,
  ProductResetFilterButton,
} from "@/features/product-filter";

export function ProductAsideFilter() {
  return (
    <Box component="aside" sx={{ width: "256px", flexShrink: 0 }}>
      <Box
        bgcolor="#FFFFFF"
        padding="16px"
        borderRadius="8px"
        display="flex"
        flexDirection="column"
        gap="10px"
      >
        <Typography variant="body2">Фильтры</Typography>
        <ProductCategorySelect />
        <Divider />
        <ProductIncompliteOnlySwitch />
      </Box>
      <ProductResetFilterButton />
    </Box>
  );
}

import { ProductCard } from "@/entities/product";
import { Box, Grid } from "@mui/material";
import { useProductList } from "../model/use-product-list";
import { ProductPagination } from "@/features/product-paginate";

export function ProductList() {
  const { data } = useProductList();

  return (
    <Box flexGrow={1}>
      <Grid
        container
        minHeight={"560px"}
        columns={5}
        rowSpacing="10px"
        columnSpacing="12px"
      >
        {data?.items.map((product) => (
          <Grid size={1} key={product.title}>
            <ProductCard {...product} />
          </Grid>
        ))}
      </Grid>
      <ProductPagination />
    </Box>
  );
}

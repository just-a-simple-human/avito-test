import { useProductGetOneByIdQuery } from "@/entities/product";
import { ProductDescriptionSection } from "@/widgets/product-description";
import { ProductHeader } from "@/widgets/product-header";
import { ProductParamsSection } from "@/widgets/product-params";
import { Box, CircularProgress, Divider } from "@mui/material";
import { useParams } from "react-router";

export function ProductSinglePage() {
  const { id = "" } = useParams<{ id: string }>();
  const { data, isPending, error } = useProductGetOneByIdQuery(parseInt(id));

  if (isPending)
    return (
      <Box
        bgcolor="#FFFFFF"
        flex={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress />
      </Box>
    );

  if (!data || error) return;

  return (
    <Box
      bgcolor="#FFFFFF"
      flex={1}
      padding="32px"
      display="flex"
      flexDirection="column"
      gap="32px"
    >
      <ProductHeader {...data} />
      <Divider />
      <Box display="flex" gap="32px">
        <ProductDescriptionSection description={data.description} />
        <ProductParamsSection {...data} />
      </Box>
    </Box>
  );
}

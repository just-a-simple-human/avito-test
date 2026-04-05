import { useProductGetOneByIdQuery } from "@/entities/product";
import { ProductEditForm } from "@/features/product-edit/ui/product-edit-form";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useParams } from "react-router";

export function ProductEditPage() {
  const { id = "" } = useParams<{ id: string }>();
  const { data, isPending, error } = useProductGetOneByIdQuery(parseInt(id));

  if (isPending) {
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
  }

  if (!data || error) {
    return (
      <Box
        bgcolor="#FFFFFF"
        flex={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography>Объявление не найдено</Typography>
        <Button href="/ads">К списку объявлений</Button>
      </Box>
    );
  }

  return (
    <Box
      bgcolor="#FFFFFF"
      flex={1}
      padding="32px"
      paddingBottom="48px"
      display="flex"
      flexDirection="column"
      gap="32px"
    >
      <Typography
        component="h1"
        fontSize="30px"
        lineHeight="40px"
        fontWeight="500"
        letterSpacing={0}
      >
        Редактировать объявление
      </Typography>
      <ProductEditForm {...data} />
    </Box>
  );
}

import { Button } from "@mui/material";
import { useProductFilter } from "../model/use-product-filter";

export function ProductResetFilterButton() {
  const { resetFilters } = useProductFilter();

  return (
    <Button
      onClick={() => resetFilters()}
      sx={{
        width: "100%",
        marginTop: "10px",
        paddingBlock: "12px",
        borderRadius: "8px",
        bgcolor: "#FFFFFF",
        color: "#848388",
        fontSize: "14px",
        lineHeight: "100%",
        textTransform: "none",
      }}
    >
      Сбросить фильтры
    </Button>
  );
}

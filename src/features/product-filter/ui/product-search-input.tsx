import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useProductFilter } from "@/features/product-filter";

export function ProductSearchInput() {
  const { searchQuery, setSearchQuery } = useProductFilter();

  return (
    <TextField
      value={searchQuery}
      onChange={(event) => setSearchQuery(event.target.value)}
      sx={{ flex: 1 }}
      size="small"
      placeholder="Найти объявление..."
      slotProps={{
        input: {
          disableUnderline: true,
          sx: { borderRadius: "8px" },
          endAdornment: (
            <InputAdornment sx={{ marginLeft: "14px" }} position="end">
              <SearchIcon sx={{ width: 18, height: 18 }} />
            </InputAdornment>
          ),
        },
        htmlInput: {
          "aria-label": "Найти объявление",
          sx: {
            minHeight: "32px",
            paddingInline: "12px",
            paddingBlock: "0px",
            fontSize: "14px",
            lineHeight: "22px",
          },
        },
      }}
      variant="filled"
    />
  );
}

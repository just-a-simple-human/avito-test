import { MenuItem, Select } from "@mui/material";
import { useProductFilter } from "../model/use-product-filter";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";

export function ProductSortSelect() {
  const { sortValue, setSortValue } = useProductFilter();

  return (
    <Select
      value={sortValue}
      onChange={(event) => setSortValue(event.target.value)}
      slotProps={{
        root: {
          sx: {
            width: "256px",
            marginLeft: "16px",
            bgcolor: "#ffffff",
            border: "4px solid #F4F4F6",
            borderRadius: "8px",
            paddingInline: "12px",
            paddingBlock: "1px",
          },
        },
        notchedOutline: {
          hidden: true,
        },
        input: {
          sx: {
            padding: 0,
            fontSize: "14px",
            lineHeight: "22px",
            paddingRight: "0 !important",
          },
        },
      }}
      IconComponent={(props) => {
        const isOpened =
          props.className?.includes("MuiSelect-iconOpen") || false;
        return isOpened ? (
          <ExpandLess sx={{ width: 18, height: 18 }} />
        ) : (
          <ExpandMore sx={{ width: 18, height: 18 }} />
        );
      }}
    >
      <MenuItem value="new" sx={{ fontSize: "14px", lineHeight: "22px" }}>
        По новизне (сначала новые)
      </MenuItem>
      <MenuItem value="old" sx={{ fontSize: "14px", lineHeight: "22px" }}>
        По новизне (сначала старые)
      </MenuItem>
      <MenuItem value="a-to-z" sx={{ fontSize: "14px", lineHeight: "22px" }}>
        По названию (от А до Я)
      </MenuItem>
      <MenuItem value="z-to-a" sx={{ fontSize: "14px", lineHeight: "22px" }}>
        По названию (от Я до А)
      </MenuItem>
    </Select>
  );
}

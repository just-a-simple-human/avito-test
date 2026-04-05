import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useProductFilter } from "../model/use-product-filter";
import GridViewIcon from "@mui/icons-material/GridView";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

export function ProductToggleView() {
  const { viewMode, setViewMode } = useProductFilter();
  return (
    <ToggleButtonGroup
      value={viewMode}
      exclusive
      onChange={(_, value) => {
        if (value !== null) setViewMode(value);
      }}
      sx={{ marginLeft: "24px", paddingInline: "2px" }}
    >
      <ToggleButton
        value="grid"
        sx={{ paddingInline: "8px", paddingBlock: "5px" }}
        color="primary"
      >
        <GridViewIcon sx={{ width: 18, height: 18 }} />
      </ToggleButton>
      <ToggleButton
        value="list"
        sx={{ paddingInline: "8px", paddingBlock: "5px" }}
        color="primary"
      >
        <FormatListBulletedIcon sx={{ width: 18, height: 18 }} />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

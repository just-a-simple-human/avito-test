import { FormControlLabel, Switch } from "@mui/material";
import { useProductFilter } from "../model/use-product-filter";

export function ProductIncompliteOnlySwitch() {
  const { incompleteOnly, setIncompleteOnly } = useProductFilter();

  return (
    <FormControlLabel
      sx={{ marginLeft: 0, marginRight: 0, userSelect: "none" }}
      slotProps={{
        typography: {
          fontSize: "14px",
          lineHeight: "22px",
          unselectable: "off",
        },
      }}
      label="Только требующие доработок"
      labelPlacement="start"
      control={<Switch size="medium" />}
      checked={incompleteOnly}
      onChange={(_, checked) => setIncompleteOnly(checked)}
    />
  );
}

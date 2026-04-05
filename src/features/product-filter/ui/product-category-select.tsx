import {
  Accordion,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  AccordionDetails,
  FormGroup,
} from "@mui/material";
import { useProductFilter } from "../model/use-product-filter";
import ExpandMore from "@mui/icons-material/ExpandMore";

export function ProductCategorySelect() {
  const { categories, toggleCategory } = useProductFilter();

  return (
    <Accordion disableGutters elevation={0}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        slotProps={{
          root: {
            sx: {
              minHeight: "22px",
              maxHeight: "22px",
              padding: "0",
              fontSize: "14px",
            },
          },
        }}
      >
        Категория
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0 }}>
        <FormGroup
          sx={{
            paddingBlock: "8px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <FormControlLabel
            sx={{ marginLeft: 0, marginRight: 0, userSelect: "none" }}
            slotProps={{
              typography: {
                fontSize: "14px",
                lineHeight: "22px",
                unselectable: "off",
              },
            }}
            control={<Checkbox sx={{ padding: 0 }} size="medium" />}
            label="Авто"
            checked={categories["cars"]}
            onChange={(_, checked) => toggleCategory("auto", checked)}
          />
          <FormControlLabel
            sx={{ marginLeft: 0, marginRight: 0, userSelect: "none" }}
            slotProps={{
              typography: {
                fontSize: "14px",
                lineHeight: "22px",
                unselectable: "off",
              },
            }}
            control={<Checkbox sx={{ padding: 0 }} size="medium" />}
            label="Электроника"
            checked={categories["electronics"]}
            onChange={(_, checked) => toggleCategory("electronics", checked)}
          />
          <FormControlLabel
            sx={{ marginLeft: 0, marginRight: 0, userSelect: "none" }}
            slotProps={{
              typography: {
                fontSize: "14px",
                lineHeight: "22px",
                unselectable: "off",
              },
            }}
            control={<Checkbox sx={{ padding: 0 }} size="medium" />}
            label="Недвижимость"
            checked={categories["realty"]}
            onChange={(_, checked) => toggleCategory("real_estate", checked)}
          />
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  );
}

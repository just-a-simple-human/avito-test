import {
  FormControl,
  FormLabel,
  Select,
  type SelectProps,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export function FormSelect(props: SelectProps) {
  return (
    <FormControl>
      <FormLabel sx={{ fontSize: "14px", lineHeight: "22px" }}>
        {props.label}
      </FormLabel>
      <Select
        slotProps={{
          root: {
            sx: {
              width: "456px",
              marginTop: "8px",
              bgcolor: "#ffffff",
              border: "1px solid #D9D9D9",
              borderRadius: "8px",
              paddingInline: "12px",
              paddingBlock: "6px",
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
        children={props.children}
        value={props.value}
        onChange={props.onChange}
      />
    </FormControl>
  );
}

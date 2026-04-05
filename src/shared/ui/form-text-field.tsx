import {
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputAdornment,
  type InputProps,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

interface IProps extends InputProps {
  label: string;
  clearValue(): void;
}

export function FormTextField({ label, clearValue, ...props }: IProps) {
  return (
    <FormControl
      sx={{ width: "fit-content", border: "none" }}
      variant="outlined"
    >
      <FormLabel
        sx={{
          fontSize: "14px",
          lineHeight: "22px",
          letterSpacing: "0",
        }}
      >
        {label}
      </FormLabel>
      <Input
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={() => clearValue()}
              sx={{ width: "16px", height: "16px", padding: 0 }}
            >
              <CancelIcon sx={{ width: "16px", height: "16px", padding: 0 }} />
            </IconButton>
          </InputAdornment>
        }
        disableUnderline
        sx={{
          width: "456px",
          marginTop: "8px !important",
          bgcolor: "#ffffff",
          border: props.error ? "1px solid #FFA940" : "1px solid #D9D9D9",
          borderRadius: "8px",
          paddingInline: "12px",
          paddingBlock: "6px",
        }}
        slotProps={{
          input: {
            sx: {
              padding: 0,
              fontSize: "14px",
              lineHeight: "22px",
              letterSpacing: "0",
            },
          },
        }}
        {...props}
      />
    </FormControl>
  );
}

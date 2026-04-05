import type { IProduct } from "@/entities/product";
import { Box, Button, Typography } from "@mui/material";
import { dateAdapter } from "../lib/date-adapter";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

export function ProductHeader({
  id,
  title,
  price,
  createdAt,
  updatedAt,
}: IProduct) {
  return (
    <Box component="header" display="flex" justifyContent="space-between">
      <Box display="flex" flexDirection="column" gap="12px">
        <Typography
          component="h1"
          fontSize="30px"
          lineHeight="40px"
          fontWeight="medium"
        >
          {title}
        </Typography>
        <Button
          href={`/ads/${id}/edit`}
          sx={{
            width: "fit-content",
            padding: "8px 12px",
            borderRadius: "8px",
            bgcolor: "#1890FF",
            color: "#FFFFFF",
            textTransform: "none",
            fontSize: "16px",
            lineHeight: "140%",
            fontWeight: "regular",
          }}
          endIcon={<EditOutlinedIcon sx={{ width: "18px", height: "18px" }} />}
        >
          Редактировать
        </Button>
      </Box>
      <Box display="flex" flexDirection="column" gap="12px">
        <Typography
          textAlign="end"
          fontSize="30px"
          lineHeight="40px"
          fontWeight="medium"
        >
          {price} &#8381;
        </Typography>
        <Box display="flex" flexDirection="column" gap="4px">
          <Typography variant="body2" textAlign="end">
            Опубликовано: {dateAdapter.adapt(createdAt)}
          </Typography>
          <Typography variant="body2" textAlign="end">
            Отредактировано: {dateAdapter.adapt(updatedAt)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

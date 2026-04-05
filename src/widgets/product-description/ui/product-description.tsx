import { Box, Typography } from "@mui/material";

export function ProductDescriptionSection({
  description,
}: {
  description?: string;
}) {
  return (
    <Box
      component="section"
      width="480px"
      display="flex"
      flexDirection="column"
      gap="32px"
    >
      <img
        src="/placeholder-image.png"
        style={{ backgroundColor: "#FAFAFA" }}
      />
      <Box sx={{ overflowX: "overlay" }} display="flex" gap="16px">
        <img
          src="/placeholder-image.png"
          style={{ width: "128px", backgroundColor: "#FAFAFA" }}
        />
        <img
          src="/placeholder-image.png"
          style={{ width: "128px", backgroundColor: "#FAFAFA" }}
        />
        <img
          src="/placeholder-image.png"
          style={{ width: "128px", backgroundColor: "#FAFAFA" }}
        />
        <img
          src="/placeholder-image.png"
          style={{ width: "128px", backgroundColor: "#FAFAFA" }}
        />
        <img
          src="/placeholder-image.png"
          style={{ width: "128px", backgroundColor: "#FAFAFA" }}
        />
      </Box>
      <Box display="flex" flexDirection="column" gap="16px">
        <Typography
          component="h2"
          fontSize="22px"
          lineHeight="28px"
          letterSpacing="0"
          fontWeight="medium"
        >
          Описание
        </Typography>
        <Typography
          fontSize="16px"
          lineHeight="140%"
          letterSpacing="0"
          fontWeight="regular"
        >
          {description || "Отсутствует"}
        </Typography>
      </Box>
    </Box>
  );
}

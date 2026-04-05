import ErrorIcon from "@mui/icons-material/Error";
import { Box, Typography, List, ListItem, Paper } from "@mui/material";
import { useMemo } from "react";
import { checkMissingParams } from "../lib/check-missing-params";
import type { AvailableCategories } from "@/shared/type/categories.type";
import { PARAMS_DICTIONARY } from "../lib/params-dictionary";

export function ProductIncomplite({
  category,
  params,
}: {
  category: AvailableCategories;
  params: Partial<Record<string, unknown>>;
}) {
  const missingParams = useMemo(
    () => checkMissingParams(category, params),
    [category, params],
  );

  if (!missingParams.length) return;

  return (
    <Paper
      component="section"
      sx={{
        width: "512px",
        paddingInline: "16px",
        paddingBlock: "12px",
        borderRadius: "8px",
        display: "flex",
        gap: "16px",
        bgcolor: "#F9F1E6",
      }}
      elevation={8}
    >
      <ErrorIcon htmlColor="#FFA940" sx={{ width: "18px", height: "18px" }} />
      <Box>
        <Typography
          component="h2"
          fontSize="16px"
          lineHeight="24px"
          fontWeight="600"
          color="#1E1E1E"
        >
          Требуются доработки
        </Typography>
        <List
          disablePadding
          sx={{
            marginTop: "4px",
            listStyle: "inside",
            fontSize: "14px",
            lineHeight: "22px",
            fontWeight: "400",
            color: "#000000D9",
            letterSpacing: 0,
          }}
          subheader={
            <Typography
              fontSize="14px"
              lineHeight="22px"
              fontWeight="400"
              color="#000000D9"
              letterSpacing="0"
            >
              У объявления не заполнены поля:
            </Typography>
          }
        >
          {missingParams.map((param) => (
            <ListItem key={param} disablePadding sx={{ display: "list-item" }}>
              {PARAMS_DICTIONARY[category].get(param)}
            </ListItem>
          ))}
        </List>
      </Box>
    </Paper>
  );
}

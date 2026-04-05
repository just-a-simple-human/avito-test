import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import type { IProduct } from "../model/types";
import { categoryTranslationHelper } from "../lib/category-translation-helper";
import Circle from "@mui/icons-material/Circle";

export function ProductCard({
  id,
  category,
  needsRevision,
  price,
  title,
}: IProduct) {
  return (
    <Card
      elevation={0}
      sx={{ borderRadius: "16px", border: "1px solid #F0F0F0" }}
    >
      <CardActionArea href={`ads/${id}`}>
        <CardMedia
          image="/placeholder-image.png"
          sx={{ aspectRatio: 4 / 3, backgroundColor: "#FAFAFA" }}
        />
        <CardContent
          sx={{
            paddingInline: "16px",
            paddingBlock: "22px",
            position: "relative",
          }}
        >
          <Chip
            label={categoryTranslationHelper.translate(category)}
            sx={{
              height: "fit-content",
              padding: 0,
              paddingInline: "12px",
              borderRadius: "6px",
              position: "absolute",
              top: 0,
              transform: "translateY(-50%)",
              bgcolor: "#FFFFFF",
              border: "1px solid #D9D9D9",
            }}
            slotProps={{
              label: {
                sx: { padding: 0 },
              },
            }}
          />
          <Typography
            variant="body2"
            sx={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </Typography>
          <Typography variant="body2">{price} &#8381;</Typography>
          {needsRevision && (
            <Chip
              sx={{
                bgcolor: "#F9F1E6",
                fontSize: "14px",
                lineHeight: "140%",
                letterSpacing: "0",
                color: "#FAAD14",
              }}
              slotProps={{
                label: {
                  sx: { padding: 0, paddingInline: "8px", paddingBlock: "2px" },
                },
              }}
              avatar={
                <Circle
                  htmlColor="#FAAD14"
                  sx={{
                    fill: "#FAAD14",
                    maxWidth: "8px",
                    maxHeight: "8px",
                    borderRadius: "8px",
                  }}
                />
              }
              label="Требует доработок"
            />
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

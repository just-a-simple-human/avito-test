import { Box, Grid, Typography } from "@mui/material";
import { ProductIncomplite } from "./product-incomplite";
import type { IProduct } from "@/entities/product";
import { useMemo } from "react";
import { PARAMS_DICTIONARY } from "../lib/params-dictionary";

function groupParams(params: Partial<Record<string, unknown>>) {
  const result = [];
  for (const param in params) {
    result.push({
      key: param,
      value: params[param],
    });
  }
  return result;
}

export function ProductParamsSection({ category, params }: IProduct) {
  const groupedParams = useMemo(() => groupParams(params), [params]);

  return (
    <Box width="512px" display="flex" flexDirection="column" gap="36px">
      <ProductIncomplite category={category} params={params} />
      <Box component="section">
        <Typography
          component="h2"
          fontSize="22px"
          lineHeight="28px"
          fontWeight="500"
          color="#000000D9"
          letterSpacing="0"
        >
          Характеристики
        </Typography>
        <Grid
          container
          columns={3}
          sx={{
            marginTop: "16px",
            fontSize: "14px",
            lineHeight: "140%",
            letterSpacing: "0",
          }}
        >
          {groupedParams.map(({ key, value }) => (
            <>
              <Grid
                key={key}
                size={1}
                display="flex"
                fontWeight="600"
                color="#00000073"
              >
                {PARAMS_DICTIONARY[category].get(key)}
              </Grid>
              <Grid
                key={`${key}:${value}`}
                size={2}
                display="flex"
                color="#1E1E1E"
              >
                {`${value}`}
              </Grid>
            </>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

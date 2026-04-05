import { type IProduct } from "@/entities/product";
import { useProductEditForm } from "../model/use-product-edit-form";
import { Box, Button, Divider, MenuItem, Typography } from "@mui/material";
import { Controller, FormProvider, useWatch } from "react-hook-form";
import { FormTextField } from "@/shared/ui/form-text-field";
import { FormSelect } from "@/shared/ui/form-select";
import {
  AutoParamFormGroup,
  ElectronicsParamFormGroup,
  RealEstateParamFormGroup,
} from "./product-form-params-group";
import LightbulbOutlineIcon from "@mui/icons-material/LightbulbOutline";
import { useEditProductMutation } from "../model/use-edit-product-mutation";

export function ProductEditForm(product: IProduct) {
  const methods = useProductEditForm({ ...product });

  const category = useWatch({ control: methods.control, name: "category" });
  const description = useWatch({
    control: methods.control,
    name: "description",
  });

  const { mutate } = useEditProductMutation(product);

  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        display="flex"
        flexDirection="column"
        gap="18px"
        onSubmit={(e) => {
          console.log(methods.formState.errors);
          methods.handleSubmit((data) => {
            console.log(data);
            mutate({ ...product, ...data });
          })(e);
        }}
      >
        <Controller
          control={methods.control}
          name="category"
          render={({ field: { value, onChange } }) => (
            <FormSelect value={value} onChange={onChange} label="Категория">
              <MenuItem
                value="auto"
                sx={{ fontSize: "14px", lineHeight: "22px" }}
              >
                Автомобили
              </MenuItem>
              <MenuItem
                value="electronics"
                sx={{ fontSize: "14px", lineHeight: "22px" }}
              >
                Электроника
              </MenuItem>
              <MenuItem
                value="real_estate"
                sx={{ fontSize: "14px", lineHeight: "22px" }}
              >
                Недвижимость
              </MenuItem>
            </FormSelect>
          )}
        />
        <Divider />
        <Controller
          control={methods.control}
          name="title"
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <FormTextField
              clearValue={() => onChange("")}
              error={!!error}
              label="Название"
              value={value}
              onChange={(e) => onChange(e.target.value)}
            />
          )}
        />
        <Divider />
        <Controller
          control={methods.control}
          name="price"
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <Box display="flex" alignItems="end" gap="24px">
              <FormTextField
                clearValue={() => onChange("")}
                error={!!error}
                label="Цена"
                value={value}
                onChange={(e) => onChange(e.target.value)}
              />
              <Button
                sx={{
                  width: "fit-content",
                  height: "32px",
                  padding: "0 7px",
                  borderRadius: "8px",
                  bgcolor: "#F9F1E6",
                  fontSize: "14px",
                  lineHeight: "140%",
                  fontWeight: "400",
                  letterSpacing: "0",
                  color: "#FFA940",
                  textTransform: "none",
                  gap: "10px",
                }}
              >
                <LightbulbOutlineIcon
                  htmlColor="#FFA940"
                  sx={{ width: "18px", height: "18px" }}
                />
                Узнать рыночную цену
              </Button>
            </Box>
          )}
        />
        <Divider />
        <Box
          component="fieldset"
          sx={{
            p: 0,
            pt: "8px",
            m: 0,
            border: "none",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <Typography component="legend">Характеристики</Typography>
          {category === "auto" && <AutoParamFormGroup {...product} />}
          {category === "real_estate" && (
            <RealEstateParamFormGroup {...product} />
          )}
          {category === "electronics" && (
            <ElectronicsParamFormGroup {...product} />
          )}
        </Box>
        <Divider />
        <Controller
          control={methods.control}
          name="description"
          render={({ field: { value, onChange } }) => (
            <Box width="456px" display="flex" flexDirection="column" gap="8px">
              <FormTextField
                clearValue={() => onChange("")}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                label="Описание"
                multiline
                minRows={3}
                maxRows={3}
              />
              <Button
                sx={{
                  width: "fit-content",
                  height: "32px",
                  padding: "0 7px",
                  borderRadius: "8px",
                  bgcolor: "#F9F1E6",
                  fontSize: "14px",
                  lineHeight: "140%",
                  fontWeight: "400",
                  letterSpacing: "0",
                  color: "#FFA940",
                  textTransform: "none",
                  gap: "10px",
                }}
              >
                <LightbulbOutlineIcon
                  htmlColor="#FFA940"
                  sx={{ width: "18px", height: "18px" }}
                />
                {description?.length
                  ? "Улучшить описание"
                  : "Придумать описание"}
              </Button>
            </Box>
          )}
        />
        <Box display="flex" gap="10px">
          <Button
            type="submit"
            sx={{
              width: "fit-content",
              height: "fit-content",
              padding: "8px 12px",
              borderRadius: "8px",
              bgcolor: "#1890FF",
              fontSize: "16px",
              lineHeight: "140%",
              fontWeight: "400",
              letterSpacing: "0",
              color: "#F3F3F3",
              textTransform: "none",
              gap: "10px",
            }}
          >
            Сохранить
          </Button>
          <Button
            sx={{
              width: "fit-content",
              height: "fit-content",
              padding: "8px 12px",
              borderRadius: "8px",
              bgcolor: "#D9D9D9",
              fontSize: "16px",
              lineHeight: "140%",
              fontWeight: "400",
              letterSpacing: "0",
              color: "#5A5A5A",
              textTransform: "none",
              gap: "10px",
            }}
          >
            Отменить
          </Button>
        </Box>
      </Box>
    </FormProvider>
  );
}

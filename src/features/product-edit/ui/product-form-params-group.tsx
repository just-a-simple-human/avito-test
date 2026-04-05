import { Controller, useFormContext } from "react-hook-form";
import { MenuItem } from "@mui/material";
import { FormTextField } from "@/shared/ui/form-text-field";
import { PARAMS_DICTIONARY } from "@/widgets/product-params/lib/params-dictionary";
import { FormSelect } from "@/shared/ui/form-select";
import type { IProduct } from "@/entities/product";

export function AutoParamFormGroup({ params }: IProduct) {
  const { control } = useFormContext();

  return (
    <>
      <Controller
        control={control}
        name="brand"
        render={({ field: { value, onChange, name } }) => (
          <FormTextField
            clearValue={() => onChange("")}
            label={PARAMS_DICTIONARY.auto.get(name) || ""}
            value={value !== undefined ? value : params[name]}
            onChange={onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="enginePower"
        render={({ field: { value, onChange, name } }) => (
          <FormTextField
            clearValue={() => onChange("")}
            label={PARAMS_DICTIONARY.auto.get(name) || ""}
            value={value !== undefined ? value : params[name]}
            onChange={onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="mileage"
        render={({ field: { value, onChange, name } }) => (
          <FormTextField
            clearValue={() => onChange("")}
            label={PARAMS_DICTIONARY.auto.get(name) || ""}
            value={value !== undefined ? value : params[name]}
            onChange={onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="model"
        render={({ field: { value, onChange, name } }) => (
          <FormTextField
            clearValue={() => onChange("")}
            label={PARAMS_DICTIONARY.auto.get(name) || ""}
            value={value !== undefined ? value : params[name]}
            onChange={onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="yearOfManufacture"
        render={({ field: { value, onChange, name } }) => (
          <FormTextField
            clearValue={() => onChange("")}
            label={PARAMS_DICTIONARY.auto.get(name) || ""}
            value={value !== undefined ? value : params[name]}
            onChange={onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="transmission"
        render={({ field: { value, onChange, name } }) => (
          <FormSelect
            label={PARAMS_DICTIONARY.auto.get(name) || ""}
            value={value !== undefined ? value : params[name]}
            onChange={onChange}
          >
            <MenuItem
              value="automatic"
              sx={{ fontSize: "14px", lineHeight: "22px" }}
            >
              Автомат
            </MenuItem>
            <MenuItem
              value="manual"
              sx={{ fontSize: "14px", lineHeight: "22px" }}
            >
              Механика
            </MenuItem>
          </FormSelect>
        )}
      />
    </>
  );
}

export function RealEstateParamFormGroup({ params }: IProduct) {
  const { control } = useFormContext();

  return (
    <>
      <Controller
        control={control}
        name="type"
        render={({ field: { value, onChange, name } }) => (
          <FormSelect
            label={PARAMS_DICTIONARY.real_estate.get(name) || ""}
            value={value !== undefined ? value : params[name]}
            onChange={onChange}
          >
            <MenuItem
              value="flat"
              sx={{ fontSize: "14px", lineHeight: "22px" }}
            >
              Квартира
            </MenuItem>
            <MenuItem
              value="house"
              sx={{ fontSize: "14px", lineHeight: "22px" }}
            >
              Дом
            </MenuItem>
            <MenuItem
              value="room"
              sx={{ fontSize: "14px", lineHeight: "22px" }}
            >
              Комната
            </MenuItem>
          </FormSelect>
        )}
      />
      <Controller
        control={control}
        name="address"
        render={({ field: { value, onChange, name } }) => (
          <FormTextField
            clearValue={() => onChange("")}
            label={PARAMS_DICTIONARY.real_estate.get(name) || ""}
            value={value !== undefined ? value : params[name]}
            onChange={onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="area"
        render={({ field: { value, onChange, name } }) => (
          <FormTextField
            clearValue={() => onChange("")}
            label={PARAMS_DICTIONARY.real_estate.get(name) || ""}
            value={value !== undefined ? value : params[name]}
            onChange={onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="floor"
        render={({ field: { value, onChange, name } }) => (
          <FormTextField
            clearValue={() => onChange("")}
            label={PARAMS_DICTIONARY.real_estate.get(name) || ""}
            value={value !== undefined ? value : params[name]}
            onChange={onChange}
          />
        )}
      />
    </>
  );
}

export function ElectronicsParamFormGroup({ params }: IProduct) {
  const { control } = useFormContext();

  return (
    <>
      <Controller
        control={control}
        name="type"
        render={({ field: { value, onChange, name } }) => (
          <FormSelect
            label={PARAMS_DICTIONARY.electronics.get(name) || ""}
            value={value !== undefined ? value : params[name]}
            onChange={onChange}
          >
            <MenuItem
              value="phone"
              sx={{ fontSize: "14px", lineHeight: "22px" }}
            >
              Телефон
            </MenuItem>
            <MenuItem
              value="laptop"
              sx={{ fontSize: "14px", lineHeight: "22px" }}
            >
              Ноутбук
            </MenuItem>
            <MenuItem
              value="misc"
              sx={{ fontSize: "14px", lineHeight: "22px" }}
            >
              Другое
            </MenuItem>
          </FormSelect>
        )}
      />
      <Controller
        control={control}
        name="brand"
        render={({ field: { value, onChange, name } }) => (
          <FormTextField
            clearValue={() => onChange("")}
            label={PARAMS_DICTIONARY.electronics.get(name) || ""}
            value={value !== undefined ? value : params[name]}
            onChange={onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="model"
        render={({ field: { value, onChange, name } }) => (
          <FormTextField
            clearValue={() => onChange("")}
            label={PARAMS_DICTIONARY.electronics.get(name) || ""}
            value={value !== undefined ? value : params[name]}
            onChange={onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="condition"
        render={({ field: { value, onChange, name } }) => (
          <FormSelect
            label={PARAMS_DICTIONARY.electronics.get(name) || ""}
            value={value !== undefined ? value : params[name]}
            onChange={onChange}
          >
            <MenuItem value="new" sx={{ fontSize: "14px", lineHeight: "22px" }}>
              Новый
            </MenuItem>
            <MenuItem
              value="used"
              sx={{ fontSize: "14px", lineHeight: "22px" }}
            >
              Б/У
            </MenuItem>
          </FormSelect>
        )}
      />
      <Controller
        control={control}
        name="color"
        render={({ field: { value, onChange, name } }) => (
          <FormTextField
            clearValue={() => onChange("")}
            label={PARAMS_DICTIONARY.electronics.get(name) || ""}
            value={value !== undefined ? value : params[name]}
            onChange={onChange}
          />
        )}
      />
    </>
  );
}

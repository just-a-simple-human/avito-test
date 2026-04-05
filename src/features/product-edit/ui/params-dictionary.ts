import type { AvailableCategories } from "@/shared/type/categories.type";

export const PARAMS_DICTIONARY: Record<
  AvailableCategories,
  Map<string, string>
> = {
  auto: new Map()
    .set("brand", "Бренд")
    .set("model", "Модель")
    .set("yearOfManufacture", "Год выпуска")
    .set("transmission", "Коробка передач")
    .set("mileage", "Пробег")
    .set("enginePower", "Мощность двигателя"),
  electronics: new Map()
    .set("type", "Тип")
    .set("brand", "Бренд")
    .set("model", "Модель")
    .set("condition", "Состояние")
    .set("color", "Цвет"),
  real_estate: new Map()
    .set("type", "Тип")
    .set("address", "Адрес")
    .set("area", "Площадь")
    .set("floor", "Этаж"),
};

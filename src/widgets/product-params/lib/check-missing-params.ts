import type { AvailableCategories } from "@/shared/type/categories.type";

const requiredParams = {
  auto: [
    "brand",
    "model",
    "yearOfManufacture",
    "transmission",
    "mileage",
    "enginePower",
  ],
  electronics: ["type", "brand", "model", "condition", "color"],
  real_estate: ["type", "address", "area", "floor"],
};

export function checkMissingParams(
  category: AvailableCategories,
  params: Record<string, unknown>,
) {
  const missingParams = [];
  for (const param of requiredParams[category]) {
    if (!Object.hasOwn(params, param)) {
      missingParams.push(param);
    }
  }
  return missingParams;
}

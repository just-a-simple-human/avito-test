import z from "zod";

const AutoTransmissionSchema = z.enum(["automatic", "manual"]);

export const AutoItemParamsSchema = z.strictObject({
  brand: z.string().nonempty(),
  model: z.string().nonempty(),
  yearOfManufacture: z.number().int().positive(),
  transmission: AutoTransmissionSchema,
  mileage: z.number().positive(),
  enginePower: z.number().int().positive(),
});
export type AutoParams = z.infer<typeof AutoItemParamsSchema>;

const RealEstateTypeSchema = z.enum(["flat", "house", "room"]);

export const RealEstateItemParamsSchema = z.strictObject({
  type: RealEstateTypeSchema,
  address: z.string().nonempty(),
  area: z.number().positive(),
  floor: z.number().int().positive(),
});
export type RealEstate = z.infer<typeof RealEstateItemParamsSchema>;

const ElectronicsTypeSchema = z.enum(["phone", "laptop", "misc"]);
const ElectronicsConditionSchema = z.enum(["new", "used"]);

export const ElectronicsEstateItemParamsSchema = z.strictObject({
  type: ElectronicsTypeSchema,
  brand: z.string().nonempty(),
  model: z.string().nonempty(),
  condition: ElectronicsConditionSchema,
  color: z.string().nonempty(),
});
export type ElectronicsParams = z.infer<
  typeof ElectronicsEstateItemParamsSchema
>;

const CategorySchema = z.enum(["auto", "electronics", "real_estate"]);

export const ProductEditSchema = z
  .object({
    category: CategorySchema,
    title: z.string(),
    description: z.string().optional(),
    price: z.number().min(0),
  })
  .and(
    z.discriminatedUnion("category", [
      z.object({
        category: z.literal("auto"),
        params: AutoItemParamsSchema.partial(),
      }),
      z.object({
        category: z.literal("real_estate"),
        params: RealEstateItemParamsSchema.partial(),
      }),
      z.object({
        category: z.literal("electronics"),
        params: ElectronicsEstateItemParamsSchema.partial(),
      }),
    ]),
  );
export type ProductEditSchemaType = z.infer<typeof ProductEditSchema>;

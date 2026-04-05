const CATEGORY_DICTIONARY = new Map()
  .set("electronics", "Электроника")
  .set("auto", "Авто")
  .set("real_estate", "Недвижимость");

export const categoryTranslationHelper = {
  dictionary: CATEGORY_DICTIONARY,
  translate(category: string) {
    if (this.dictionary.has(category)) return this.dictionary.get(category);
  },
};

export const categoryAdapter = {
  adapt(categories: Record<string, boolean>) {
    const categoryList = [];
    for (const category in categories) {
      if (categories[category]) categoryList.push(category);
    }
    if (!categoryList.length) return undefined;
    return categoryList.join(",");
  },
};

const SORT_MAP = new Map<
  string,
  {
    sortColumn: string;
    sortDirection: string;
  }
>()
  .set("new", {
    sortColumn: "createdAt",
    sortDirection: "desc",
  })
  .set("old", {
    sortColumn: "createdAt",
    sortDirection: "asc",
  })
  .set("a-to-z", {
    sortColumn: "title",
    sortDirection: "asc",
  })
  .set("z-to-a", {
    sortColumn: "title",
    sortDirection: "desc",
  });

export const sortAdapter = {
  map: SORT_MAP,
  adapt(sort: string) {
    if (this.map.has(sort)) return this.map.get(sort);
  },
};

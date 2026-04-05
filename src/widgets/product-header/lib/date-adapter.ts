export const dateAdapter = {
  adapt(dateString: string) {
    return new Date(dateString).toLocaleString("ru-RU", {
      day: "numeric",
      month: "long",
      hour: "2-digit",
      minute: "2-digit",
    });
  },
};

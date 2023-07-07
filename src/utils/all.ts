import { ActivableItem } from "./types";

export const getFormattedDate = (date: string | number | Date) => !date ? "" : (
  new Date(date).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
);

export function getActive<I extends ActivableItem>(item: I, date?: Date) {
  const now = date || new Date;
  return !item.draft && (!item.publishDate || item.publishDate <= now) && (!item.expirationDate || item.expirationDate >= now);
};

export function getActives<I extends ActivableItem>(items: I[]) {
  const now = new Date;
  return items.filter(i => getActive(i, now));
};

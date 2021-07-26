import { InvoiceItem } from "../types/common-interface";
import { InitialValueProps } from "./form";
import randomize from "randomatic";

export function addProperties(
  status: string,
  data: InitialValueProps
): InvoiceItem {
  const daysToAdd = parseInt(data.paymentTerms.split(" ")[1]);
  const newDate = new Date(data.createdAt);
  newDate.setDate(newDate.getDate() + daysToAdd);

  const total =
    data.items.length > 0
      ? data.items
          .map((item) => {
            return item.total;
          })
          .reduce((acc: number, item) => {
            return acc + item * 1;
          }, 0)
      : 0;
  return {
    ...data,
    createdAt: data.createdAt.toLocaleDateString(),
    id: randomize("AA0000", 6),
    status: status,
    paymentDue: newDate.toLocaleDateString(),
    total: typeof total === "number" ? total.toFixed(2) : total,
  };
}

import { InvoiceItem } from "../types/common-interface";
export default function getTotal(items: InvoiceItem["items"]): number {
  return items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
}

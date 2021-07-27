import React from "react";
import { InvoiceItem } from "../../../../types/common-interface";
import { TableRow } from "./TableRow.style";

interface Props {
  item: Omit<InvoiceItem["items"][0], "total">;
}

const TableRowItem: React.FC<Props> = ({ item: { name, price, quantity } }) => {
  return (
    <TableRow>
      <p>{name}</p>
      <p className="font--light">{quantity}</p>
      <p className="font--light">&#163; {price.toFixed(2)}</p>
      <p>&#163; {(quantity * price).toFixed(2)}</p>
      <p className="font--light">
        {quantity} x &#163; {price}
      </p>
    </TableRow>
  );
};

export default TableRowItem;

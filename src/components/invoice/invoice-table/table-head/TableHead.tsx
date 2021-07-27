import React from "react";
import { TextSeconday } from "../../../../styles/typography";
import { TableHeader } from "./TableHead.style";

const TableHead: React.FC = () => {
  return (
    <TableHeader>
      <TextSeconday className="body-font-small">Item</TextSeconday>
      <TextSeconday className="body-font-small">QTY.</TextSeconday>
      <TextSeconday className="body-font-small">Price</TextSeconday>
      <TextSeconday className="body-font-small">Total</TextSeconday>
    </TableHeader>
  );
};

export default TableHead;

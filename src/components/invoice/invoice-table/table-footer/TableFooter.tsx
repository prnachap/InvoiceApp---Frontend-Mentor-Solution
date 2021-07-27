import React from "react";
import { TotalPriceDiv, Price } from "./TableFooter.style";

interface Props {
  total: number;
}

const TableFooter: React.FC<Props> = ({ total }) => {
  return (
    <TotalPriceDiv>
      <p className="body-font-small">Amount Due</p>
      <Price>&#163; {total.toFixed(2)}</Price>
    </TotalPriceDiv>
  );
};

export default TableFooter;

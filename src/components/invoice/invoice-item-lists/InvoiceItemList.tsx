import React from "react";
import { ContainerDiv } from "./InvoiceItemList.style";
import { useSelector } from "../../../hooks/useTypedSelector";
import InvoiceItem from "../invoice-item/InvoiceItem";

const InvoiceItemList: React.FC = () => {
  const { allInvoices } = useSelector((state) => state.invoices);

  return (
    <ContainerDiv>
      {allInvoices &&
        allInvoices.map((item) => <InvoiceItem key={item.id} invoice={item} />)}
    </ContainerDiv>
  );
};

export default InvoiceItemList;

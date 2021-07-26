import React from "react";
import {
  Wrapper,
  InvoiceID,
  InvoiceSpan,
  InvoiceDate,
  InvoiceTo,
  Price,
  Status,
  StyledDiv,
} from "./InvoiceItem.style";
import { ReactComponent as ArrowRight } from "../../../assets/icon-arrow-right.svg";
import { Link } from "react-router-dom";
import { InvoiceItem } from "../../../types/common-interface";
import { StatusCirle } from "../../../styles/common-styles";

interface Props {
  invoice: InvoiceItem;
}

const Invoice: React.FC<Props> = ({ invoice }) => {
  const { id, paymentDue, clientName, total, status } = invoice;

  return (
    <Link to={`/${id}`}>
      <Wrapper>
        <InvoiceID className="secondary">
          <InvoiceSpan>#</InvoiceSpan>
          {id}
        </InvoiceID>
        <InvoiceDate className="body-font-medium">Due {paymentDue}</InvoiceDate>
        <InvoiceTo className="body-font-medium">{clientName}</InvoiceTo>
        <Price className="test">£ {total}</Price>
        <Status className="status" status={status} id={id}>
          <StatusCirle status={status} /> {status}
        </Status>
        <ArrowRight className="invoice__arrow-right" />
        <StyledDiv />
      </Wrapper>
    </Link>
  );
};

export default Invoice;

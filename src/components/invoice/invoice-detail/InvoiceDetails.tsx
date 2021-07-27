import React from "react";
import {
  InvoiceDetailsContainer,
  InvoiceID,
  InvoiceSpan,
  AddressFlexContainer,
  InvoiceContainer,
  Grid,
  DetailsDiv,
  SubTitle,
  StyledSpan,
} from "./InvoiceDetails.style";
import InvoiceTable from "../invoice-table/InvoiceTable";
import { InvoiceItem } from "../../../types/common-interface";
import { TextPrimary, TextSeconday } from "../../../styles/typography";

interface Props {
  invoiceItem: InvoiceItem;
  loading: boolean;
}

const InvoiceDetails: React.FC<Props> = ({ invoiceItem, loading }) => {
  const {
    id,
    clientAddress,
    clientEmail,
    clientName,
    createdAt,
    description,
    items,
    paymentDue,
    senderAddress,
  } = invoiceItem;

  return (
    <InvoiceDetailsContainer>
      <AddressFlexContainer>
        <InvoiceContainer>
          <InvoiceID>
            <InvoiceSpan>#</InvoiceSpan>
            {id}
          </InvoiceID>
          <TextPrimary>{description}</TextPrimary>
        </InvoiceContainer>
        <TextSeconday>
          <span>{senderAddress.street}</span>
          <span>{senderAddress.city}</span>
          <span>{senderAddress.postCode}</span>
          <span>{senderAddress.country}</span>
        </TextSeconday>
      </AddressFlexContainer>
      <Grid>
        <DetailsDiv className="invoice__date">
          <TextPrimary className="body-font-medium">Invoice Date</TextPrimary>
          <SubTitle>{createdAt}</SubTitle>
        </DetailsDiv>
        <DetailsDiv className="invoice__bill">
          <TextPrimary className="body-font-medium">Bill To</TextPrimary>
          <SubTitle>{clientName}</SubTitle>
          <TextPrimary className="mg-top-xs">
            <StyledSpan className="invoice--address">
              {clientAddress.street}
            </StyledSpan>
            <StyledSpan>{clientAddress.city}</StyledSpan>
            <StyledSpan>{clientAddress.postCode}</StyledSpan>
            <StyledSpan>{clientAddress.country}</StyledSpan>
          </TextPrimary>
        </DetailsDiv>
        <DetailsDiv className="invoice__to">
          <TextPrimary>Sent to</TextPrimary>
          <SubTitle>{clientEmail}</SubTitle>
        </DetailsDiv>
        <DetailsDiv className="invoice__due">
          <TextPrimary>Payment Due</TextPrimary>
          <SubTitle>{paymentDue}</SubTitle>
        </DetailsDiv>
      </Grid>
      <InvoiceTable items={items} />
    </InvoiceDetailsContainer>
  );
};

export default InvoiceDetails;

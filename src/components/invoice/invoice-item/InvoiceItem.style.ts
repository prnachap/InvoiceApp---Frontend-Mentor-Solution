import styled from "styled-components";
import {
  StyledInvoiceID,
  StyledInvoiceSpan,
  StyledStatusDiv,
} from "../../../styles/common-styles";
import { TextPrimary } from "../../../styles/typography";

export const Wrapper = styled.div`
  min-height: 7.2rem;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-areas: "id date createdby price status icon";
  grid-template-columns: min-content max-content 1fr 1fr 10.4rem 2rem;
  grid-gap: 2.7rem;
  padding: 0 3.2rem;
  border-radius: 8px;
  margin-bottom: 1.6rem;
  cursor: pointer;
  border: 1px solid transparent;
  background: ${({ theme }) => theme.colors.card.primaryColor};
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
  transition: all 0.4s ease-in-out;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.common.secondaryColor};
  }

  @media (max-width: 64em) {
    padding: 0 2.4rem;
  }

  @media (max-width: 43.75em) {
    padding: 2.4rem;
    grid-template-areas:
      "id createdby"
      "seperater seperater"
      "date status"
      "price status";
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 0;
    grid-column-gap: 6rem;
  }

  .invoice__arrow-right {
    cursor: pointer;
    @media (max-width: 43.75em) {
      display: none;
    }
  }
`;
export const InvoiceID = styled(StyledInvoiceID)`
  grid-area: id;
`;
export const InvoiceSpan = styled(StyledInvoiceSpan)`
  color: ${({ theme }) => theme.colors.card.textColorCommon};
`;

export const InvoiceDate = styled(TextPrimary)`
  color: ${({ theme }) => theme.colors.card.textColorSecondary};
  grid-area: date;
  @media (max-width: 43.75em) {
    margin-bottom: 0.8rem;
  }
`;

export const InvoiceTo = styled(TextPrimary)`
  color: ${({ theme }) => theme.colors.card.textColorTertiary};
  grid-area: createdby;
`;

export const Price = styled(InvoiceID)`
  grid-area: price;
`;

export const StyledDiv = styled.div`
  grid-area: "seperater";
  margin-bottom: 2.4rem;
  @media (min-width: 43.76em) {
    display: none;
    margin-bottom: 0rem;
  }
`;

export const Status = styled(StyledStatusDiv)``;

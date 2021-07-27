import styled from "styled-components";
import {
  StyledInvoiceID,
  StyledInvoiceSpan,
} from "../../../styles/common-styles";

export const InvoiceDetailsContainer = styled.div`
  margin-top: 2.4rem;
  padding: 4.8rem;
  background: ${({ theme }) => theme.colors.card.primaryColor};
  border-radius: 8px;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);

  @media (max-width: 64em) {
    padding: 3.2rem;
  }

  @media (max-width: 43.75em) {
    padding: 2.4rem;
  }
`;

export const AddressFlexContainer = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.card.textColorSecondary};
  justify-content: space-between;
  p {
    text-align: right;
    span {
      display: block;
    }
    @media (max-width: 43.75em) {
      text-align: left;
      margin-bottom: 3rem;
    }
  }
  @media (max-width: 43.75em) {
    flex-direction: column;
  }
`;

export const InvoiceContainer = styled.div``;
export const InvoiceID = styled(StyledInvoiceID)`
  margin-bottom: 0.8rem;
`;
export const InvoiceSpan = styled(StyledInvoiceSpan)``;
export const Grid = styled.div`
  margin-top: 3.1rem;
  display: grid;
  grid-template-areas:
    "date bill sent"
    "due bill .";
  grid-row-gap: 2rem;
  grid-column-gap: 2rem;

  @media (max-width: 43.75em) {
    grid-template-areas:
      "date bill"
      "due bill"
      "sent .";
  }
`;
export const DetailsDiv = styled.div`
  &.invoice__date {
    grid-area: date;
  }
  &.invoice__bill {
    grid-area: bill;
    align-self: stretch;
  }
  &.invoice__to {
    grid-area: sent;
  }
  &.invoice__due {
    grid-area: due;
    align-self: flex-end;
  }
`;
export const SubTitle = styled.p`
  font-weight: 700;
  font-size: 1.5rem;
  letter-spacing: -0.31px;
  line-height: 1.33;
  margin-top: 1.2rem;
  color: ${({ theme }) => theme.colors.card.textColorPrimary};
`;
export const StyledSpan = styled.span`
  display: block;
`;

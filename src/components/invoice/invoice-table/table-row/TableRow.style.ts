import styled from "styled-components";

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-areas: "item qty price total";
  margin-bottom: 3.2rem;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.25px;
  color: ${({ theme }) => theme.colors.card.textColorPrimary};

  .font--light {
    color: ${({ theme }) => theme.colors.card.textColorSecondary};
  }

  & > *:nth-child(1) {
    text-align: left;
    grid-area: item;
  }
  & > *:nth-child(2) {
    text-align: center;
    grid-area: qty;
    @media (max-width: 43.75em) {
      display: none;
    }
  }
  & > *:nth-child(3) {
    text-align: right;
    grid-area: price;
    @media (max-width: 43.75em) {
      display: none;
    }
  }
  & > *:nth-child(4) {
    grid-area: total;
    text-align: right;
    @media (max-width: 43.75em) {
      align-self: center;
    }
  }
  & > *:nth-child(5) {
    text-align: left;
    grid-area: qty;
    @media (min-width: 43.8135em) {
      display: none;
    }
  }

  @media (max-width: 43.75em) {
    margin-bottom: 2.4rem;
    grid-template-columns: 2fr 2fr;
    grid-template-areas:
      "item total"
      "qty total";
    grid-row-gap: 0.8rem;

    & > *:nth-child(2) {
      display: none;
    }
    & > *:nth-child(3) {
      display: none;
    }
    & > *:nth-child(4) {
      align-self: center;
    }
  }

  @media (min-width: 43.8135em) {
    & > *:nth-child(5) {
      display: none;
    }
  }
`;

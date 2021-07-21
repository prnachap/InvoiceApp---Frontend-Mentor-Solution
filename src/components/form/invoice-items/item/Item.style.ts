import styled from "styled-components";

export const GridContainerItem = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1.5fr 0.5fr;
  grid-template-areas: "item item qty price total icon";
  grid-column-gap: 1.6rem;
  align-items: center;
  position: relative;

  .label-1 {
    grid-area: item;
  }

  .label-2 {
    grid-area: qty;
  }

  .label-3 {
    grid-area: price;
  }
  .label-4 {
    grid-area: total;
  }
  .label-5 {
    grid-area: icon;
    align-items: flex-end;
    margin-top: 3rem;
    cursor: pointer;
    &:hover {
      svg path {
        transition: all 0.3s ease-in-out;
      }
      svg path {
        fill: ${({ theme }) => theme.colors.error.colorPrimary};
      }
    }
  }

  @media (max-width: 43.75em) {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:
      "item item item item item item"
      "qty price price total total icon";
    grid-gap: 2.4rem;
  }
`;

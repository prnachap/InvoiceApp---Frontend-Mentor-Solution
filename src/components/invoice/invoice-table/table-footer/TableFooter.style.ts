import styled from "styled-components";

export const TotalPriceDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.2rem;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background: ${({ theme }) => theme.colors.card.backgroundColorSecondary};

  p {
    color: ${({ theme }) => theme.colors.common.primaryColor};
  }
`;
export const Price = styled.p`
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 1.3333;
  letter-spacing: -0.5px;
  color: ${({ theme }) => theme.colors.common.primaryColor};

  @media (max-width: 43.75em) {
    font-size: 2rem;
  }
`;

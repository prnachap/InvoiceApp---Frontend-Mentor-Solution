import styled from "styled-components";

export const Table = styled.div`
  margin-top: 4.8rem;
  padding: 3.2rem;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background: ${({ theme }) => theme.colors.card.backgroundColorPrimary};

  @media (max-width: 43.75em) {
    padding: 2.4rem;
  }
`;

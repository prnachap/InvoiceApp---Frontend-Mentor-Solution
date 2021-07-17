import styled from "styled-components";
import { StyledStatusDiv } from "../../styles/common-styles";
export const StatusWrapperDiv = styled.div`
  height: 8.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3.2rem;
  background: ${({ theme }) => theme.colors.card.primaryColor};
  border-radius: 8px;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);

  @media (max-width: 43.75em) {
    padding: 0 2.4rem;
  }
`;
export const StatusFlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  @media (max-width: 43.75em) {
    width: 100%;
    justify-content: space-between;
    gap: 0;
  }

  p {
    text-transform: capitalize;
  }
`;
export const StatusDiv = styled(StyledStatusDiv)``;
export const ButtonFlexContainer = styled.div`
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 8px;

    @media (max-width: 43.75em) {
      margin-right: 0;
    }
  }

  @media (max-width: 43.75em) {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 2.4rem;
    justify-content: space-around;
    margin-right: 0;
    background: ${({ theme }) => theme.colors.card.primaryColor};
  }
`;

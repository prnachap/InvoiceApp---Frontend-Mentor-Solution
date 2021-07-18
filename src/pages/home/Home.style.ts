import styled from "styled-components";
import { ContainerWrapper } from "../../styles/common-styles";

export const Container = styled(ContainerWrapper)`
  margin-top: 7.2rem;

  @media (max-width: 64em) {
    margin-top: 13.6rem;
  }
  @media (max-width: 43.75em) {
    margin-top: 10.4rem;
  }
`;

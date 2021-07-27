import styled from "styled-components";
import { StyledLink } from "../../styles/common-styles";

export const Link = styled(StyledLink)`
  font-size: ${({ theme }) => theme.fontSize.small};
  line-height: ${({ theme }) => theme.lineHeight.small};
  letter-spacing: ${({ theme }) => theme.letterSpacing.small};
  margin-top: 6.4rem;
  margin-bottom: 3.2rem;

  @media (max-width: 64em) {
    margin-top: 12.8rem;
  }
  @media (max-width: 43.75em) {
    margin-top: 12rem;
  }
`;

import styled from "styled-components";
import { TextPrimary } from "../../../styles/typography";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Span = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.6rem;
  width: 1.6rem;
  border: 1px solid transparent;
  background: ${(p) => p.theme.colors.card.secondaryColor};
  border-radius: 2px;
  margin-right: 1.3rem;
  transition: all 0.3s ease-in-out;

  &.fill {
    background: #7c5dfa;
  }
`;

export const FormGroup = styled.div`
  &:hover ${Span} {
    border: 1px solid ${({ theme }) => theme.colors.common.secondaryColor};
  }
`;

export const Input = styled.input`
  display: none;
  cursor: pointer;
`;

export const Label = styled(TextPrimary)`
  display: flex;
  align-items: center;
  margin-bottom: 1.6rem;
  font-weight: 700;
  text-transform: capitalize;

  color: ${({ theme }) => theme.colors.card.textColorPrimary};
`;

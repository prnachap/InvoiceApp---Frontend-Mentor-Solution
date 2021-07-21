import styled, { css } from "styled-components";
import { StyledInput, StyledLabel } from "../../../styles/common-styles";

interface IError {
  error: boolean;
}

export const InputGroup = styled.div``;

export const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ErrorText = styled.p`
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -0.208333px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.error.colorPrimary};
  transition: all 0.3s ease-in-out;
`;

export const Label = styled.label<IError>`
  ${StyledLabel}
  ${(p) =>
    p.error &&
    css`
      color: ${({ theme }) => theme.colors.error.colorPrimary};
    `}
`;

export const Input = styled.input<IError>`
  ${StyledInput}
  ${(p) =>
    p.error
      ? css`
  border: 1px solid
      ${({ theme }) => theme.colors.error.colorPrimary};
  }
  `
      : css`
          border: 1px solid ${(p) => p.theme.colors.form.borderColor};
        `}

        &.faded {
    border: none;
  }
  &::disabled {
  }
`;

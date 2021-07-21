import styled, { css } from "styled-components";

interface IError {
  error: boolean;
}

export const InputGroup = styled.div`
  .react-datepicker-wrapper {
    width: 100%;
    display: block;
  }
`;

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
  display: block;
  text-transform: capitalize;
  margin-bottom: 1rem;
  font-size: ${({ theme }) => theme.fontSize.small};
  line-height: ${({ theme }) => theme.lineHeight.small};
  letter-spacing: ${({ theme }) => theme.letterSpacing.small};
  transition: all 0.3s ease-in-out;

  ${(p) =>
    p.error &&
    css`
      color: ${({ theme }) => theme.colors.error.colorPrimary};
    `}
`;

export const Button = styled.button<IError>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSize.small};
  line-height: ${({ theme }) => theme.lineHeight.small};
  letter-spacing: ${({ theme }) => theme.letterSpacing.small};
  font-weight: 700;
  padding: 1.6rem 2rem;
  color: ${(p) => p.theme.colors.headings.primaryColor};
  border-radius: 4px;
  background-color: ${(p) => p.theme.colors.form.backgroundColor};
  transition: all 0.3s ease-in-out;

  ${(p) =>
    p.error
      ? css`
  border: 1px solid
      ${({ theme }) => theme.colors.error.colorPrimary}!important;
  }
  `
      : css`
          border: 1px solid ${(p) => p.theme.colors.form.borderColor};
        `}

  &:focus,
  &:active {
    outline: none;
    border: 1px solid ${(p) => p.theme.colors.common.secondaryColor};
  }
`;

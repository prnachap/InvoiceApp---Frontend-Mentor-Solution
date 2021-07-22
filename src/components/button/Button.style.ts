import styled, { css } from "styled-components";

interface StyleProps {
  buttonStyle: string;
}

export const StyledButton = styled.button<StyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSize.small};
  letter-spacing: ${({ theme }) => theme.letterSpacing.small};
  line-height: ${({ theme }) => theme.lineHeight.small};
  border: none;
  outline: none;
  cursor: pointer;
  text-transform: capitalize;
  font-weight: 700;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  transition: all 0.3s ease-in-out;

  ${(p) =>
    p.buttonStyle === "primary"
      ? css`
          padding: 0.8rem 1.5rem 0.8rem 0.8rem;
        `
      : css`
          padding: 1.6rem 2.4rem;
          @media (max-width: 43.75em) {
            padding: 1rem;
          }
        `}

  /* primary button */
  background: ${(p) => p.theme.colors.common.secondaryColor};
  color: ${(p) => p.theme.colors.common};

  &:hover {
    background: ${(p) => p.theme.colors.common.tertiaryColor};
  }

  /* secondary button and its variants */
  &.btn--default {
    background: ${(p) => p.theme.colors.common.secondaryColor};
    color: ${(p) => p.theme.colors.common.primaryColor};
    &:hover {
      background: ${(p) => p.theme.colors.common.tertiaryColor};
    }
  }

  &.btn--fullwidth {
    width: 100%;
    text-align: center;
  }

  &.btn--form {
    background: ${(p) => p.theme.colors.button.primaryDefault};
    color: ${(p) => p.theme.colors.text.primaryColor};
    &:hover {
      background: ${(p) => p.theme.colors.button.primaryDefaultHover};
    }
  }

  &.btn--dark {
    background: ${(p) => p.theme.colors.button.secondaryDefault};
    color: ${(p) => p.theme.colors.text.primaryColor};
    &:hover {
      background: ${(p) => p.theme.colors.button.secondaryDefaultHover};
    }
  }

  &.btn--danger {
    background: ${(p) => p.theme.colors.button.tertiaryDefault};
    color: ${(p) => p.theme.colors.common.primaryColor};
    &:hover {
      background: ${(p) => p.theme.colors.button.tertiaryDefaultHover};
    }
  }
`;

export const SVGContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  margin-right: 1.6rem;
  background: ${(p) => p.theme.colors.common.primaryColor};

  @media (max-width: 43.75em) {
    margin-right: 0.8rem;
  }

  svg {
    margin-left: 0.1rem;
  }
`;

export const DesktopText = styled.span`
  display: inline-block;
  @media (max-width: 43.75em) {
    display: none;
  }
`;
export const MobileText = styled.span`
  display: none;
  @media (max-width: 43.75em) {
    display: inline-block;
  }
`;

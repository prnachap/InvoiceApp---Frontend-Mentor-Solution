import styled, { css } from "styled-components";

const baseStyles = css`
  color: ${(p) => p.theme.colors.headings.primaryColor};
  font-weight: 700;
  text-transform: capitalize;
`;
// Headings
export const HeadingPrimary = styled.h1`
  ${baseStyles}
  font-size:${({ theme }) => theme.fontSize.extraLarge};
  line-height: ${({ theme }) => theme.lineHeight.extraLarge};
  letter-spacing: ${({ theme }) => theme.letterSpacing.extraLarge};
  @media (max-width: 43.75em) {
    font-size: ${({ theme }) => theme.fontSize.large};
    letter-spacing: ${({ theme }) => theme.letterSpacing.large};
  }
`;

export const HeadingSecondary = styled.h2`
  ${baseStyles}
  h2 {
    font-size: ${({ theme }) => theme.fontSize.large};
    line-height: ${({ theme }) => theme.lineHeight.large};
    letter-spacing: ${({ theme }) => theme.letterSpacing.large};
  }
`;

export const HeadingTertiary = styled.h3`
  ${baseStyles}
  font-size:  ${({ theme }) => theme.fontSize.medium};
  line-height: ${({ theme }) => theme.lineHeight.medium};
  letter-spacing: ${({ theme }) => theme.letterSpacing.medium};

  &.secondary {
    font-size: ${({ theme }) => theme.fontSize.small};
    line-height: ${({ theme }) => theme.lineHeight.small};
    letter-spacing: ${({ theme }) => theme.letterSpacing.small};
  }
`;

// paragraphs
export const TextPrimary = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
  line-height: ${({ theme }) => theme.lineHeight.small};
  letter-spacing: ${({ theme }) => theme.letterSpacing.small};
`;

export const TextSeconday = styled.p`
  font-size: ${({ theme }) => theme.fontSize.extraSmall};
  line-height: ${({ theme }) => theme.lineHeight.extraSmall};
  letter-spacing: ${({ theme }) => theme.letterSpacing.extraSmall}; ;
`;

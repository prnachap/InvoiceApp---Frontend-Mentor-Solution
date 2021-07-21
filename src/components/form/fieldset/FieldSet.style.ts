import styled from "styled-components";

// sub title
export const FormLegend = styled.legend`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.small};
  line-height: ${({ theme }) => theme.lineHeight.small};
  letter-spacing: ${({ theme }) => theme.letterSpacing.small};
  color: ${(p) => p.theme.colors.common.secondaryColor};
`;

// Input Group
export const StyledFieldSet = styled.fieldset`
  border: none;
  margin: 4.8rem 0;
  & > *:not(:last-child) {
    margin-bottom: 2.4rem;
  }
`;

// Grid Container for Spacing
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-column-gap: 2.4rem;

  &.date__container {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 43.75em) {
    grid-template-columns: 1fr;
    grid-gap: 2.4rem;

    &.date__container {
      grid-template-columns: 1fr;
    }
  }
`;

import styled from "styled-components";
import { Form } from "formik";

// Wrapper div
export const WrapperDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  max-width: 80rem;

  background: ${(p) => p.theme.colors.form.backgroundColorSecondary};

  /* background-color: #fff; */
  padding: 5.6rem 3.3rem 3.2rem 15.9rem;
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  z-index: 150;

  @media (max-width: 64em) {
    padding-top: 13.6rem;
    padding-left: 5.6rem;
  }

  @media (max-width: 43.75em) {
    border-radius: 0;
    padding-left: 2.4rem;
    padding-right: 2.4rem;
  }

  /* back link */
  .back__link {
    text-decoration: none;
    display: flex;
    align-items: center;
    height: 1.5rem;
    font-weight: 700;
    position: relative;
    margin-bottom: 2.4rem;
    color: ${(p) => p.theme.colors.headings.primaryColor};

    @media (min-width: 43.76em) {
      display: none;
    }
    svg {
      margin-right: 2.3rem;
    }
  }

  @media (max-width: 64em) {
    width: 61.6rem;
  }

  @media (max-width: 43.75em) {
    width: 100%;
  }
`;

// form
export const FormikForm = styled(Form)`
  padding-bottom: 8rem;
  overflow-y: scroll;
  height: 100%;
  padding-right: 1.6rem;

  @media (max-width: 43.75em) {
    padding-right: 1rem;
  }
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${(p) => p.theme.colors.body.primaryColor};
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: ${(p) => p.theme.colors.form.borderColor};
  }
`;

// sub title
export const FormSubTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.small};
  line-height: ${({ theme }) => theme.lineHeight.small};
  letter-spacing: ${({ theme }) => theme.letterSpacing.small};
  color: ${(p) => p.theme.colors.common.secondaryColor};
`;

// Input Group
export const Container = styled.div`
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

// form footer
export const FormFooter = styled.div`
  background: ${(p) => p.theme.colors.form.backgroundColor};
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 3.1rem 3.31rem 3.1rem 15.9rem;
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;

  @media (max-width: 43.75em) {
    border-radius: 0;
    padding: 2.1rem 2.4rem;
  }

  .button__container {
    display: flex;
    justify-content: flex-end;

    & > *:not(:last-child) {
      margin-right: 8px;
    }
  }
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 1.77;
  letter-spacing: 0.38px;
  color: #777f98;
  margin-bottom: 1.6rem;
`;

export const Label = styled.label`
  display: block;
  text-transform: capitalize;
  margin-bottom: 1rem;
`;

export const GridContainerItem = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1.5fr 0.5fr;
  grid-template-areas: "item item qty price total icon";
  grid-column-gap: 1.6rem;
  align-items: center;
  position: relative;

  .label-1 {
    grid-area: item;
  }

  .label-2 {
    grid-area: qty;
  }

  .label-3 {
    grid-area: price;
  }
  .label-4 {
    grid-area: total;
  }
  .label-5 {
    grid-area: icon;
    align-items: flex-end;
    margin-top: 3rem;
    cursor: pointer;
    &:hover {
      svg path {
        transition: all 0.3s ease-in-out;
      }
      svg path {
        fill: ${({ theme }) => theme.colors.error.colorPrimary};
      }
    }
  }

  @media (max-width: 43.75em) {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:
      "item item item item item item"
      "qty price price total total icon";
    grid-gap: 2.4rem;
  }
`;

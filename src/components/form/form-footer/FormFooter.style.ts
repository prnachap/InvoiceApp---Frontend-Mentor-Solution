import styled from "styled-components";
// form footer
export const FormFooterWrapper = styled.div`
  background: ${(p) => p.theme.colors.form.backgroundColor};
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 3.1rem 3.31rem 3.1rem 15.9rem;
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 43.75em) {
    border-radius: 0;
    padding: 2.1rem 2.4rem;
    justify-content: center;
    & > *:not(:last-child) {
      margin-right: 8px;
    }
  }

  .button__container {
    display: flex;
    justify-content: flex-end;

    & > *:not(:last-child) {
      margin-right: 8px;
    }
  }
`;

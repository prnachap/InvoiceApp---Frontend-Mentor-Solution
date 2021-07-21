import styled from "styled-components";
// import {
//   arrowAnimationClose,
//   arrowAnimationOpen,
// } from "../../styles/animation";

// wrapper
export const InputWrapper = styled.div`
  position: relative;
  font-family: inherit;
  font-size: 1.2rem;
  line-height: 1.25;
  letter-spacing: -0.25px;
  font-weight: 700;
`;
// label
export const Label = styled.p`
  display: block;
  text-transform: capitalize;
  margin-bottom: 1rem;
  font-weight: 500;
`;

// select component
export const StyledSelect = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 1.6rem 2rem;
  border-radius: 4px;
  color: ${(p) => p.theme.colors.headings.primaryColor};
  border: 1px solid ${(p) => p.theme.colors.form.borderColor};
  background-color: ${(p) => p.theme.colors.form.backgroundColor};

  &.open {
    border: 1px solid ${(p) => p.theme.colors.common.secondaryColor};
  }
`;

// list
export const DropDown = styled.ul`
  position: absolute;
  width: 100%;
  list-style: none;
  background: white;
  border-radius: 8px;
  margin-top: 8px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  color: ${(p) => p.theme.colors.headings.primaryColor};
  background-color: ${(p) => p.theme.colors.form.backgroundColor};

  & > *:not(:last-child) {
    border-bottom: 1px solid ${(p) => p.theme.colors.form.borderColor};
  }
`;

// list of options
export const List = styled.li`
  padding: 1.6rem 2.4rem;
  cursor: pointer;
  transition: color 0.4s ease-in-out;

  &:hover {
    color: ${(p) => p.theme.colors.common.secondaryColor};
  }
`;

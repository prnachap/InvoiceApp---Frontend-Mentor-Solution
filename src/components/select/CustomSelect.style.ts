import styled from "styled-components";
import dropDownUrl from "../../assets/icon-arrow-down.svg";
import { StyledInput, StyledLable } from "../../styles/common-styles";

export const Wrapper = styled.div``;

export const SelectWrapper = styled.div`
  position: relative;
  font-family: inherit;
  width: 100%;
  font-size: 1.2rem;
  line-height: 1.25;
  letter-spacing: -0.25px;
  font-weight: 700;

  &::after {
    content: url(${dropDownUrl});
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
    transition: all 0.3s ease-in-out;
  }

  &:hover::after {
    content: url(${dropDownUrl});
    transform: rotate(180deg) translateY(50%);
    top: 50%;
    right: 1rem;
  }
`;

export const Label = styled.label`
  ${StyledLable}
`;
export const StyledSelect = styled.select`
  appearance: none;
  ${StyledInput}
`;

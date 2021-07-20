import styled, { css } from "styled-components";
import { IStatus } from "../types/common-interface";
import { getStatus } from "../utils/getStatus";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HeadingTertiary } from "./typography";

export const ContainerWrapper = styled(motion.div)`
  max-width: 73rem;
  width: 95%;
  margin: 0 auto;
`;

export const StyledStatusDiv = styled.div<IStatus>`
  width: 10.4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  grid-area: status;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.small};
  letter-spacing: ${({ theme }) => theme.letterSpacing.small};
  line-height: ${({ theme }) => theme.lineHeight.small};

  &.status {
    text-transform: capitalize;
    color: ${(p) => getStatus(p.status, p.theme)};
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: ${(p) => getStatus(p.status, p.theme)};
      opacity: 0.06;
      border-radius: 4px;
    }
  }
`;

export const StatusCirle = styled.div<IStatus>`
  height: 0.8rem;
  width: 0.8rem;
  background-color: ${(p) => getStatus(p.status, p.theme)};
  border-radius: 50%;
  margin-right: 0.8rem;
`;

// link
export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  height: 1.5rem;
  font-weight: 700;
  position: relative;
  color: ${(p) => p.theme.colors.headings.primaryColor};

  svg {
    margin-right: 2.3rem;
  }
`;

// Invoice Styled components
export const StyledInvoiceID = styled.h3`
  ${HeadingTertiary}
  color: ${({ theme }) => theme.colors.card.textColorPrimary};
`;
export const StyledInvoiceSpan = styled.span`
  color: ${({ theme }) => theme.colors.card.textColorCommon};
`;

export const StyledLable = css`
  display: block;
  text-transform: capitalize;
  margin-bottom: 1rem;
  font-size: ${({ theme }) => theme.fontSize.small};
  line-height: ${({ theme }) => theme.lineHeight.small};
  letter-spacing: ${({ theme }) => theme.letterSpacing.small};
  transition: all 0.3s ease-in-out;
`;

export const StyledInput = css`
  display: block;
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
  border: 1px solid ${(p) => p.theme.colors.form.borderColor};

  &:focus,
  &:active {
    outline: none;
    border: 1px solid ${(p) => p.theme.colors.common.secondaryColor};
  }
`;

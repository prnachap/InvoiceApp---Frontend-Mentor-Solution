import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  position: relative;
`;

export const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  ${(p) =>
    p.className
      ? css`
          margin-right: 4rem;
          @media (max-width: 43.75em) {
            margin-right: 2rem;
          }
        `
      : css`
          margin-right: 0rem;
        `}

  .arrow {
    margin-left: 1.6rem;

    @media (max-width: 43.75em) {
      margin-left: 1.2rem;
    }
  }
`;

export const FilterDropdown = styled(motion.div)`
  width: 19.2rem;
  height: 12.8rem;
  padding: 2.4rem;
  background: ${(p) => p.theme.colors.card.tertiaryColor};
  border-radius: 1rem;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
  position: absolute;
  top: 4rem;
  right: -4rem;
  z-index: 100;
  @media (max-width: 43.75em) {
    right: -2rem;
    top: 5rem;
  }
`;

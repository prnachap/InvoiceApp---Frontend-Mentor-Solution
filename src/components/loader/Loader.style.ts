import { motion } from "framer-motion";
import styled from "styled-components";

export const LoaderDiv = styled(motion.div)`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.card.textColorSecondary};

  &.center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

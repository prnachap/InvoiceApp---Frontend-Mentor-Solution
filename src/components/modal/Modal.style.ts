import { motion } from "framer-motion";
import styled from "styled-components";
export const ModalDiv = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: #000000;
  opacity: 0.5;
  z-index: 100;
`;

import React from "react";
import { modalVariants } from "../../styles/animation";
import { ModalDiv } from "./Modal.style";

const Modal: React.FC = () => {
  return (
    <ModalDiv
      data-testid="modal"
      variants={modalVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    ></ModalDiv>
  );
};

export default Modal;

import React from "react";
import { Wrapper, ImageContainer } from "./Illustrate.style";
import Illustration from "../../assets/illustration-empty.svg";

const Illustate: React.FC = () => {
  return (
    <Wrapper>
      <ImageContainer>
        <img
          src={Illustration}
          alt="empty envelop"
          className="envelop__image"
        />
      </ImageContainer>
      <h2>There is nothing here</h2>
      <p className="body-font-medium">
        Create an invoice by clicking the <span>New Invoice</span> button and
        get started
      </p>
    </Wrapper>
  );
};

export default Illustate;

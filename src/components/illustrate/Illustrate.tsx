import React from "react";
import { Wrapper, ImageContainer } from "./Illustrate.style";
import Illustration from "../../assets/illustration-empty.svg";
import { TextPrimary } from "../../styles/typography";

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
      <TextPrimary>
        Create an invoice by clicking the <span>New Invoice</span> button and
        get started
      </TextPrimary>
    </Wrapper>
  );
};

export default Illustate;

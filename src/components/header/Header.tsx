import React from "react";
import { Container, HeaderWrapper, Wrapper } from "./Header.style";
import Button from "../button/Button";
import FilterStatus from "../filter/filter-status/FilterStatus";
import { HeadingPrimary, TextPrimary } from "../../styles/typography";
import {
  formAction,
  modalAction,
} from "../../state/action-creators/ui-action-creators";
import { useDispatch } from "react-redux";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <Container>
      <HeaderWrapper>
        <HeadingPrimary>Invoices</HeadingPrimary>
        <TextPrimary>No Invoices</TextPrimary>
      </HeaderWrapper>
      <Wrapper>
        <FilterStatus classname="mg-right" />
        <Button
          buttonStyle="primary"
          handleClick={() => {
            dispatch(modalAction());
            dispatch(formAction());
          }}
        >
          New Invoice
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Header;

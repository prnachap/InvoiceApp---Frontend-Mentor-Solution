import React from "react";
import { Container, HeaderWrapper, Wrapper } from "./Header.style";
import Button from "../button/Button";
import FilterStatus from "../filter/filter-status/FilterStatus";
import { HeadingPrimary, TextPrimary } from "../../styles/typography";

const Header: React.FC = () => {
  return (
    <Container>
      <HeaderWrapper>
        <HeadingPrimary>Invoices</HeadingPrimary>
        <TextPrimary>No Invoices</TextPrimary>
      </HeaderWrapper>
      <Wrapper>
        <FilterStatus classname="mg-right" />
        <Button type="primary">New Invoice</Button>
      </Wrapper>
    </Container>
  );
};

export default Header;

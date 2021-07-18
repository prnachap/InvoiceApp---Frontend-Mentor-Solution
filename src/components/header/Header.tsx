import React from "react";
import { Container, HeaderWrapper, Wrapper } from "./Header.style";
import Button from "../button/Button";
import FilterStatus from "../filter/filter-status/FilterStatus";
import { TextPrimary } from "../../styles/typography";

const Header: React.FC = () => {
  return (
    <Container>
      <HeaderWrapper>
        <h1>Invoices</h1>
        <TextPrimary>No Invoices</TextPrimary>
      </HeaderWrapper>
      <Wrapper>
        <FilterStatus classname="mg-right" />
        <Button type="primary" />
      </Wrapper>
    </Container>
  );
};

export default Header;

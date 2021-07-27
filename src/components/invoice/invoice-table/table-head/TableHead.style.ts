import styled from "styled-components";

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-bottom: 3.2rem;
  & > *:nth-child(1) {
    text-align: left;
  }
  & > *:nth-child(2) {
    text-align: center;
  }
  & > *:nth-child(3) {
    text-align: right;
  }
  & > *:nth-child(4) {
    text-align: right;
  }

  @media (max-width: 43.75em) {
    display: none;
  }
`;

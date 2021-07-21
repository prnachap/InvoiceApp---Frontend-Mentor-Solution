import styled from "styled-components";
export const StyledList = styled.ul`
  list-style: none;
  padding-bottom: 4rem;
`;
export const StyledListItem = styled.li`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.error.colorPrimary};
`;

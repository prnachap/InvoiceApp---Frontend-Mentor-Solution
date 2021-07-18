import styled from "styled-components";

export const Container = styled.div`
  /* max-width: 73rem */
  width: 100%;
  height: 5.9rem;
  /* margin: 0 auto; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 43.75em) {
    height: 4.4rem;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    margin-bottom: 0.8rem;

    @media (max-width: 43.75em) {
      margin-bottom: 0.4rem;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

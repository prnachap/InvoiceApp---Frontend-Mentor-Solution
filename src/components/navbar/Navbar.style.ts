import styled from "styled-components";

export const SideBar = styled.nav`
  position: fixed;
  width: 10.3rem;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: ${(p) => p.theme.colors.body.secondayColor};
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  padding-bottom: 2.4rem;
  z-index: 200;
  @media (max-width: 64em) {
    width: 100%;
    height: 8rem;
    border-radius: 0;
    padding-bottom: 0;
    padding-right: 3.2rem;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  @media (max-width: 43.75em) {
    width: 100%;
    height: 7.2rem;
    padding-right: 2rem;
  }
`;

export const LogoContainer = styled.div`
  width: 10.3rem;
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(p) => p.theme.colors.common.secondaryColor};
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 50%;
    background: ${(p) => p.theme.colors.common.tertiaryColor};
    border-top-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
  }
  @media (max-width: 64em) {
    width: 8rem;
    height: 100%;
  }
  @media (max-width: 43.75em) {
    width: 7.2rem;
    height: 100%;
  }
  .logo {
    z-index: 100;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 64em) {
    width: auto;
    height: 100%;
    flex-direction: row;
    align-items: center;
  }

  .underline {
    width: 100%;
    height: 0.1rem;
    background: ${(p) => p.theme.colors.common.quaternaryColor};
    margin-top: 3.1rem;
    margin-bottom: 2.4rem;
    @media (max-width: 64em) {
      height: 100%;
      width: 0.1rem;
      margin-top: 0rem;
      margin-bottom: 0rem;
      margin: 0 3.2rem;
    }
  }
`;

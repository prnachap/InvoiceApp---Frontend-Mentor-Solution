import styled from "styled-components";
export const Wrapper = styled.div`
  max-width: 24.24.rem;
  width: 100%;
  margin-top: 14.1rem;
  text-align: center;

  @media (max-width: 43.75em) {
    margin-top: 10.2rem;
  }

  h2 {
    margin-top: 6.4rem;
    margin-bottom: 2.4rem;

    @media (max-width: 43.75em) {
      margin-top: 4rem;
    }
  }

  p {
    max-width: 22rem;
    margin: 0 auto;
    span {
      font-weight: 700;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 20rem;

  .envelop__image {
    max-width: 100%;
    height: 100%;
    margin: 0 auto;
    object-fit: cover;
    display: block;
  }
`;

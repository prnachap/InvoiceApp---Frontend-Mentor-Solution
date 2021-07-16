import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,*::after,*::before{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  html{
    font-size:62.5%;
  }

  body{
    font-family: 'Spartan', sans-serif;
    background: ${(p) => p.theme.colors.body.primaryColor};
    color : ${(p) => p.theme.colors.text.primaryColor};
    transition: background 0.3s ease-in-out;
  }
`;

import { DefaultTheme } from "styled-components";

export const darkTheme: DefaultTheme = {
  id: "dark",
  name: "dark",
  colors: {
    body: {
      primaryColor: "#141625",
      secondayColor: "#1E2139",
    },
    headings: {
      primaryColor: "#ffffff",
    },
    text: {
      primaryColor: "#DFE3FA",
      secondaryColor: "#fff",
    },
    common: {
      primaryColor: "#ffffff",
      secondaryColor: "#7C5DFA",
      tertiaryColor: "#9277FF",
      quaternaryColor: "#494E6E",
    },
    form: {
      borderColor: "#252945",
      backgroundColor: "#1E2139",
      footerBackgroundColor: "#141625",
    },
    button: {
      primaryDefault: "#252945",
      primaryDefaultHover: "#ffffff",
      secondaryDefault: "#373B53",
      secondaryDefaultHover: "#1E2139",
      tertiaryDefault: "#EC5757",
      tertiaryDefaultHover: "#FF9797",
    },
    card: {
      primaryColor: "#1E2139",
      secondaryColor: "#1E2139",
      tertiaryColor: "#252945",
      textColorPrimary: "#ffffff",
      textColorSecondary: "#DFE3FA",
      textColorTertiary: "#ffffff",
      textColorCommon: "#7E88C3",
      backgroundColorPrimary: "#252945",
      backgroundColorSecondary: "#0C0E16",
    },
    status: {
      colorPrimary: "#33D69F",
      colorSecondary: "#FF8F00",
      colorTertairy: "#DFE3FA",
    },
  },
  fontSize: {
    extraLarge: "3.2rem",
    large: "2rem",
    medium: "1.6rem",
    small: "1.2rem",
    extraSmall: "1.1rem",
  },
  letterSpacing: {
    extraLarge: "-1px",
    large: "-0.63px",
    medium: "-0.8px",
    small: "-0.25px",
    extraSmall: "-0.23px",
  },
  lineHeight: {
    extraLarge: 1.125,
    large: 1.1,
    medium: 1.5,
    small: 1.25,
    extraSmall: 1.636363,
  },
  transitionDuration: {
    duration: "0.3s",
  },
  borderRadius: {
    large: "2.4rem",
    small: "0.4rem",
  },
};

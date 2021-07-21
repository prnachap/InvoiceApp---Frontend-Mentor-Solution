import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  id: "light",
  name: "light",
  colors: {
    body: {
      primaryColor: "#F8F8F8",
      secondayColor: "#141625",
    },
    headings: {
      primaryColor: "#0C0E16",
    },
    text: {
      primaryColor: "#7E88C3",
      secondaryColor: "#888EB0",
    },
    common: {
      primaryColor: "#ffffff",
      secondaryColor: "#7C5DFA",
      tertiaryColor: "#9277FF",
      quaternaryColor: "#494E6E",
    },
    form: {
      borderColor: "#DFE3FA",
      backgroundColor: "#ffffff",
      backgroundColorSecondary: "#ffffff",
    },
    button: {
      primaryDefault: "#F9FAFE",
      primaryDefaultHover: "#DFE3FA",
      secondaryDefault: "#373B53",
      secondaryDefaultHover: "#0C0E16",
      tertiaryDefault: "#EC5757",
      tertiaryDefaultHover: "#FF9797",
    },
    card: {
      primaryColor: "#ffffff",
      secondaryColor: "#DFE3FA",
      tertiaryColor: "#ffffff",
      textColorPrimary: "#0C0E16",
      textColorSecondary: "#7E88C3",
      textColorTertiary: "#858BB2",
      textColorCommon: "#7E88C3",
      backgroundColorPrimary: "#F9FAFE",
      backgroundColorSecondary: "#373B53",
    },
    status: {
      colorPrimary: "#33D69F",
      colorSecondary: "#FF8F00",
      colorTertairy: "#373B53",
    },
    error: {
      colorPrimary: "#EC5757",
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

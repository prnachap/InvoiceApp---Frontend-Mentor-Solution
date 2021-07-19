import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    id: string;
    name: string;
    colors: {
      body: {
        primaryColor: string;
        secondayColor: string;
      };
      headings: {
        primaryColor: string;
      };
      text: {
        primaryColor: string;
        secondaryColor: string;
      };
      common: {
        primaryColor: string;
        secondaryColor: string;
        tertiaryColor: string;
        quaternaryColor: string;
      };
      form: {
        borderColor: string;
        backgroundColor: string;
        footerBackgroundColor: string;
      };
      button: {
        primaryDefault: string;
        primaryDefaultHover: string;
        secondaryDefault: string;
        secondaryDefaultHover: string;
        tertiaryDefault: string;
        tertiaryDefaultHover: string;
      };
      card: {
        primaryColor: string;
        secondaryColor: string;
        tertiaryColor: string;
        textColorPrimary: string;
        textColorSecondary: string;
        textColorTertiary: string;
        textColorCommon: string;
        backgroundColorPrimary: string;
        backgroundColorSecondary: string;
      };
      status: {
        colorPrimary: string;
        colorSecondary: string;
        colorTertairy: string;
      };
      error: {
        colorPrimary: string;
      };
    };
    fontSize: {
      extraLarge: string;
      large: string;
      medium: string;
      small: string;
      extraSmall: string;
    };
    letterSpacing: {
      extraLarge: string;
      large: string;
      medium: string;
      small: string;
      extraSmall: string;
    };
    lineHeight: {
      extraLarge: number;
      large: number;
      medium: number;
      small: number;
      extraSmall: number;
    };
    transitionDuration: {
      duration: string;
    };

    borderRadius: {
      large: string;
      small: string;
    };

    setTheme?: () => void;
  }
}

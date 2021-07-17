import { DefaultTheme } from "styled-components";

export const getStatus = (status: string, theme: DefaultTheme) => {
  if (status === "paid") {
    return theme.colors.status.colorPrimary;
  } else if (status === "pending") {
    return theme.colors.status.colorSecondary;
  } else if (status === "draft") {
    return theme.colors.status.colorTertairy;
  }
};

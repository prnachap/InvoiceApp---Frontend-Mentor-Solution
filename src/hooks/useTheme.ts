import { useContext } from "react";
import { ThemeContext } from "styled-components";

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("Please useTheme context within its provider");
  }
  return context;
};

export default useTheme;

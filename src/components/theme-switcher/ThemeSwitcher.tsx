import React from "react";
import useTheme from "../../hooks/useTheme";
import { ReactComponent as ThemeSwitchMoon } from "../../assets/icon-moon.svg";
import { ReactComponent as ThemeSwitchSun } from "../../assets/icon-sun.svg";

const ThemeSwitcher: React.FC = () => {
  const { id, setTheme } = useTheme();
  const handleClick = () => {
    if (setTheme) {
      setTheme();
    }
  };

  return id === "light" ? (
    <ThemeSwitchMoon
      role="img"
      style={{ cursor: "pointer" }}
      onClick={handleClick}
    />
  ) : (
    <ThemeSwitchSun
      role="img"
      style={{ cursor: "pointer" }}
      onClick={handleClick}
    />
  );
};

export default ThemeSwitcher;

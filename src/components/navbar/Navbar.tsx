import React from "react";
import { SideBar, LogoContainer, Wrapper } from "./Navbar.style";
import { ReactComponent as Icon } from "../../assets/logo.svg";
import Profile from "../profile-picture/ProfileImage";
import ThemeSwicher from "../theme-switcher/ThemeSwitcher";

const SideNav: React.FC = () => {
  return (
    <SideBar>
      <LogoContainer>
        <Icon className="logo" />
      </LogoContainer>
      <Wrapper>
        <ThemeSwicher />
        <div className="underline"></div>
        <Profile />
      </Wrapper>
    </SideBar>
  );
};

export default SideNav;

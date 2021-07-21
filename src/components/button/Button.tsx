import React from "react";
import {
  DesktopText,
  MobileText,
  StyledButton,
  SVGContainer,
} from "./Button.style";
import { ReactComponent as IconPlus } from "../../assets/icon-plus.svg";

interface IButton {
  buttonStyle: string;
  className?: string;
  type?: "submit" | "button" | "reset" | undefined;
  handleClick?: () => void;
}

const Button: React.FC<IButton> = ({
  children,
  buttonStyle,
  className,
  type,
  handleClick,
}) => {
  return (
    <StyledButton
      buttonStyle={buttonStyle}
      className={className}
      onClick={handleClick}
      type={type ? type : "submit"}
    >
      {buttonStyle === "primary" && (
        <SVGContainer>
          <IconPlus role="img" />
        </SVGContainer>
      )}
      {buttonStyle === "primary" ? (
        <>
          <MobileText>{children?.toString().slice(0, 3)}</MobileText>
          <DesktopText>{children}</DesktopText>
        </>
      ) : (
        children
      )}
    </StyledButton>
  );
};

export default Button;

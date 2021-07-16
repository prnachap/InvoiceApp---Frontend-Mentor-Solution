import React from "react";
import {
  DesktopText,
  MobileText,
  StyledButton,
  SVGContainer,
} from "./Button.style";
import { ReactComponent as IconPlus } from "../../assets/icon-plus.svg";

interface IButton {
  type: string;
  className?: string;
  handleClick?: () => void;
}

const Button: React.FC<IButton> = ({
  children,
  type,
  className,
  handleClick,
}) => {
  return (
    <StyledButton buttontype={type} className={className} onClick={handleClick}>
      {type === "primary" && (
        <SVGContainer>
          <IconPlus role="img" />
        </SVGContainer>
      )}
      {type === "primary" ? (
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

import React, { MouseEventHandler, ReactElement, useState } from "react";
import { useAtomValue } from "jotai";
import { containerSizeAtom } from "../../store/containerSizeAtom";
import { themeAtom } from "../../store/themeAtom";

export type ToolbarButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  last?: boolean;
  disabled?: boolean;
};

const ToolbarButton = (props: React.PropsWithChildren<ToolbarButtonProps>) => {
  const { children, onClick, last, disabled } = props;

  const containerSize = useAtomValue(containerSizeAtom);
  const theme = useAtomValue(themeAtom);

  if (!containerSize) {
    return null;
  }

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const buttonSize = containerSize / 11;
  const iconSize = buttonSize * 0.55;

  const buttonStyle = {
    width: buttonSize,
    height: buttonSize,
    backgroundColor: theme.buttonBackgroundColor,
    filter: isHover ? "brightness(80%)" : null,
    borderRadius: buttonSize / 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: !last && buttonSize / 10,
    opacity: disabled && 0.5,
  };

  return (
    <button
      style={buttonStyle}
      onClick={!disabled && onClick}
      onMouseEnter={!disabled && handleMouseEnter}
      onMouseLeave={!disabled && handleMouseLeave}
    >
      {React.Children.map(children, (child: ReactElement) => {
        return React.cloneElement(child, {
          style: {
            color: "white",
          },
          size: iconSize,
        });
      })}
    </button>
  );
};

export default ToolbarButton;

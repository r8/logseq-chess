import React, { MouseEventHandler, ReactElement, useState } from "react";
import { useAtomValue } from "jotai";
import { containerSizeAtom } from "../../store/containerSizeAtom";

export type ToolbarButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  last?: boolean;
  disabled?: boolean;
};

const ToolbarButton = (props: React.PropsWithChildren<ToolbarButtonProps>) => {
  const { children, onClick, last, disabled } = props;

  const containerSize = useAtomValue(containerSizeAtom);

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
    filter: !disabled && isHover ? "brightness(80%)" : null,
    borderRadius: buttonSize / 5,
    marginRight: !last && buttonSize / 10,
    opacity: disabled && 0.5,
  };

  return (
    <button
      className="bg-primary/90 flex items-center justify-center"
      style={buttonStyle}
      onClick={!disabled && onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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

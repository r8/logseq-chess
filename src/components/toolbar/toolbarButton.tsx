import React, { MouseEventHandler, ReactElement } from "react";
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

  const buttonSize = containerSize / 11;
  const iconSize = buttonSize * 0.55;

  const buttonStyle = {
    width: buttonSize,
    height: buttonSize,
    backgroundColor: theme.buttonBackgroundColor,
    borderRadius: buttonSize / 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: !last && buttonSize / 10,
    opacity: disabled && 0.5,
  };

  return (
    <button style={buttonStyle} onClick={!disabled && onClick}>
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

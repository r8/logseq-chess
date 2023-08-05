import React, { MouseEventHandler, ReactElement } from "react";
import { useAtomValue } from "jotai";
import { containerSizeAtom } from "../../store/containerSizeAtom";
import { themeAtom } from "../../store/themeAtom";

export type ToolbarButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const ToolbarButton = (props: React.PropsWithChildren<ToolbarButtonProps>) => {
  const { children, onClick } = props;

  const containerSize = useAtomValue(containerSizeAtom);
  const theme = useAtomValue(themeAtom);

  if (!containerSize) {
    return null;
  }

  const buttonSize = containerSize / 10;

  const buttonStyle = {
    width: buttonSize,
    height: buttonSize,
    padding: buttonSize / 10,
    backgroundColor: theme.buttonBackgroundColor,
    borderRadius: buttonSize / 5,
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {React.Children.map(children, (child: ReactElement) => {
        return React.cloneElement(child, {
          style: {
            color: "white",
          },
        });
      })}
    </button>
  );
};

export default ToolbarButton;

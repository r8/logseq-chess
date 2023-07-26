import { CustomSquareProps } from "react-chessboard/dist/chessboard/types";
import { forwardRef } from "react";
import { CustomSquareRendererProps } from "../../../types";
import SquareMark from "./squareMark";

const CustomSquareRenderer = forwardRef<
  HTMLDivElement,
  CustomSquareProps & CustomSquareRendererProps
>((props, ref) => {
  const { children, square, squareColor, style, markSquares } = props;

  return (
    <div ref={ref} style={{ ...style, position: "relative" }}>
      {markSquares && markSquares.includes(square) ? <SquareMark /> : null}
      {children}
    </div>
  );
});

export default CustomSquareRenderer;

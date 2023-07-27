import { CustomSquareProps } from "react-chessboard/dist/chessboard/types";
import { forwardRef } from "react";
import { CustomSquareRendererProps } from "../../../types";
import SquareMark from "./squareMark";
import SquareHighlight from "./squareHighlight";

const CustomSquareRenderer = forwardRef<
  HTMLDivElement,
  CustomSquareProps & CustomSquareRendererProps
>((props, ref) => {
  const { children, square, style, markSquares, highlightSquares } = props;

  return (
    <div ref={ref} style={{ ...style, position: "relative" }}>
      {markSquares && markSquares.includes(square) ? <SquareMark /> : null}
      {highlightSquares && highlightSquares.includes(square) ? (
        <SquareHighlight />
      ) : null}
      {children}
    </div>
  );
});

export default CustomSquareRenderer;

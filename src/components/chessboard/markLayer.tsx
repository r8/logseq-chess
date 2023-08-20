import React from "react";
import { MarkLayerProps } from "../../types";
import SquareMark from "./square/squareMark";
import SquareHighlight from "./square/squareHighlight";

const MarkLayer = (props: MarkLayerProps) => {
  const { markSquares, highlightSquares } = props;

  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        zIndex: 2,
      }}
    >
      {markSquares &&
        markSquares.map((square) => <SquareMark square={square} />)}
      {highlightSquares &&
        highlightSquares.map((square) => <SquareHighlight square={square} />)}
    </div>
  );
};

export default MarkLayer;

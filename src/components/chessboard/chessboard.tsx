import {
  Chessboard as ChessboardParent,
  ClearPremoves,
} from "react-chessboard";
import { forwardRef } from "react";
import {
  ChessboardProps,
  CustomSquareProps,
} from "react-chessboard/dist/chessboard/types";
import { ExtendedChessboardProps } from "../../types";
import CustomSquareRenderer from "./square/customSquareRenderer";

const Chessboard = forwardRef<
  ClearPremoves,
  ChessboardProps & ExtendedChessboardProps
>((props, ref) => {
  return (
    <ChessboardParent
      {...props}
      ref={ref}
      customSquare={(squareProps: CustomSquareProps) => (
        <CustomSquareRenderer
          {...squareProps}
          markSquares={props.markSquares}
          highlightSquares={props.highlightSquares}
          children={squareProps.children}
        />
      )}
    />
  );
});

export default Chessboard;

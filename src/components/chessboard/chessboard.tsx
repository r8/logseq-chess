import {
  Chessboard as ChessboardParent,
  ClearPremoves,
} from "react-chessboard";
import { forwardRef } from "react";
import { CustomSquareProps } from "react-chessboard/dist/chessboard/types";
import CustomSquareRenderer from "./square/customSquareRenderer";
import { useAtomValue } from "jotai";
import { boardOrientationAtom } from "../../store/boardOrientationAtom";
import { ARROW_COLOR } from "../../constants/colors";
import { currentPositionAtom } from "../../store/positions/currentPositionAtom";

const Chessboard = forwardRef<ClearPremoves>((props, ref) => {
  const boardOrientation = useAtomValue(boardOrientationAtom);
  const currentPosition = useAtomValue(currentPositionAtom);

  return (
    <ChessboardParent
      ref={ref}
      customArrowColor={ARROW_COLOR}
      animationDuration={300}
      position={currentPosition.fen}
      customArrows={currentPosition.arrows}
      boardOrientation={boardOrientation}
      customSquare={(squareProps: CustomSquareProps) => (
        <CustomSquareRenderer
          {...squareProps}
          markSquares={currentPosition.squares}
          highlightSquares={currentPosition.lastMove}
          children={squareProps.children}
        />
      )}
    />
  );
});

export default Chessboard;

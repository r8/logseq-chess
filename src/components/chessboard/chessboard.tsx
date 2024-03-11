import {
  Chessboard as ChessboardParent,
  ClearPremoves,
} from "react-chessboard";
import { forwardRef } from "react";
import { useAtomValue } from "jotai";
import { boardOrientationAtom } from "../../store/boardOrientationAtom";
import { ARROW_COLOR } from "../../constants/colors";
import { currentPositionAtom } from "../../store/positions/currentPositionAtom";
import MarkLayer from "./markLayer";

const Chessboard = forwardRef<ClearPremoves>((props, ref) => {
  const boardOrientation = useAtomValue(boardOrientationAtom);
  const currentPosition = useAtomValue(currentPositionAtom);

  return (
    <div className="relative">
      <ChessboardParent
        ref={ref}
        customArrowColor={ARROW_COLOR}
        animationDuration={200}
        position={currentPosition.fen}
        customArrows={currentPosition.arrows}
        boardOrientation={boardOrientation}
      />
      <MarkLayer
        markSquares={currentPosition.squares}
        highlightSquares={currentPosition.lastMove}
      />
    </div>
  );
});

export default Chessboard;

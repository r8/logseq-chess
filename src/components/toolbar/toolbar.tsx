import ToolbarButton from "./toolbarButton";
import { useAtom, useAtomValue } from "jotai";
import { containerSizeAtom } from "../../store/containerSizeAtom";
import { boardOrientationAtom } from "../../store/boardOrientationAtom";
import { currentPositionIndexAtom } from "../../store/positions/currentPositionIndexAtom";
import {
  FaFastBackward,
  FaFastForward,
  FaStepBackward,
  FaStepForward,
} from "react-icons/fa";
import { FaRotate } from "react-icons/fa6";
import { positionsCountAtom } from "../../store/positions/positionsCountAtom";

const Toolbar = () => {
  const containerSize = useAtomValue(containerSizeAtom);
  const [boardOrientation, setBoardOrientation] = useAtom(boardOrientationAtom);
  const [currentPositionIndex, setCurrentPositionIndex] = useAtom(
    currentPositionIndexAtom,
  );
  const positionsCount = useAtomValue(positionsCountAtom);

  const switchBoardOrientation = () => {
    if (boardOrientation == "white") {
      setBoardOrientation("black");
    } else {
      setBoardOrientation("white");
    }
  };

  const stepForward = () => {
    if (currentPositionIndex < positionsCount - 1) {
      setCurrentPositionIndex(currentPositionIndex + 1);
    }
  };

  const stepBack = () => {
    if (currentPositionIndex > 0) {
      setCurrentPositionIndex(currentPositionIndex - 1);
    }
  };

  const jumpToTheStart = () => {
    if (currentPositionIndex > 0) {
      setCurrentPositionIndex(0);
    }
  };

  const jumpToTheEnd = () => {
    if (currentPositionIndex < positionsCount - 1) {
      setCurrentPositionIndex(positionsCount - 1);
    }
  };

  if (!containerSize) {
    return null;
  }

  return (
    <div
      className="flex flex-row justify-between"
      style={{
        marginTop: containerSize / 40,
        marginBottom: containerSize / 40,
      }}
    >
      <ToolbarButton onClick={switchBoardOrientation}>
        <FaRotate />
      </ToolbarButton>

      <div className="flex flex-row">
        {positionsCount > 1 && (
          <div className="flex flex-row">
            <ToolbarButton
              onClick={jumpToTheStart}
              disabled={currentPositionIndex == 0}
            >
              <FaFastBackward />
            </ToolbarButton>
            <ToolbarButton
              onClick={stepBack}
              disabled={currentPositionIndex == 0}
            >
              <FaStepBackward />
            </ToolbarButton>
            <ToolbarButton
              onClick={stepForward}
              disabled={currentPositionIndex == positionsCount - 1}
            >
              <FaStepForward />
            </ToolbarButton>
            <ToolbarButton
              onClick={jumpToTheEnd}
              disabled={currentPositionIndex == positionsCount - 1}
              last
            >
              <FaFastForward />
            </ToolbarButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default Toolbar;

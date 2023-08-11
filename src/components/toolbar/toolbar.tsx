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

  const positionForward = () => {
    if (currentPositionIndex < positionsCount - 1) {
      setCurrentPositionIndex(currentPositionIndex + 1);
    }
  };

  const positionBack = () => {
    if (currentPositionIndex > 0) {
      setCurrentPositionIndex(currentPositionIndex - 1);
    }
  };

  const positionFirst = () => {
    if (currentPositionIndex > 0) {
      setCurrentPositionIndex(0);
    }
  };

  const positionLast = () => {
    if (currentPositionIndex < positionsCount - 1) {
      setCurrentPositionIndex(positionsCount - 1);
    }
  };

  if (!containerSize) {
    return null;
  }

  return (
    <div
      style={{
        paddingTop: containerSize / 40,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <ToolbarButton onClick={switchBoardOrientation}>
        <FaRotate />
      </ToolbarButton>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {positionsCount > 1 && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <ToolbarButton
              onClick={positionFirst}
              disabled={currentPositionIndex == 0}
            >
              <FaFastBackward />
            </ToolbarButton>
            <ToolbarButton
              onClick={positionBack}
              disabled={currentPositionIndex == 0}
            >
              <FaStepBackward />
            </ToolbarButton>
            <ToolbarButton
              onClick={positionForward}
              disabled={currentPositionIndex == positionsCount - 1}
            >
              <FaStepForward />
            </ToolbarButton>
            <ToolbarButton
              onClick={positionLast}
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

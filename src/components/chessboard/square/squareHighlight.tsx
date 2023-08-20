import { SQUARE_HIGHLIGHT_COLOR } from "../../../constants/colors";
import { useAtomValue } from "jotai";
import { containerSizeAtom } from "../../../store/containerSizeAtom";
import { SquareMarkProps } from "../../../types";
import { boardOrientationAtom } from "../../../store/boardOrientationAtom";
import { getRelativeCoords } from "../../../utils/coordinates";

const SquareHighlight = (props: SquareMarkProps) => {
  const { square } = props;

  const containerSize = useAtomValue(containerSizeAtom);
  const boardOrientation = useAtomValue(boardOrientationAtom);

  if (!containerSize) {
    return null;
  }

  const size = containerSize / 8;

  const squareCoordinates = getRelativeCoords(
    boardOrientation,
    containerSize,
    square,
  );

  return (
    <div
      style={{
        position: "absolute",
        width: size,
        height: size,
        left: squareCoordinates.x - size / 2,
        top: squareCoordinates.y - size / 2,
        backgroundColor: SQUARE_HIGHLIGHT_COLOR,
      }}
    />
  );
};

export default SquareHighlight;

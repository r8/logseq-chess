import { SQUARE_MARK_COLOR } from "../../../constants/colors";
import { useAtomValue } from "jotai";
import { containerSizeAtom } from "../../../store/containerSizeAtom";
import { SquareMarkProps } from "../../../types";
import { boardOrientationAtom } from "../../../store/boardOrientationAtom";
import { getRelativeCoords } from "../../../utils/coordinates";

const SquareMark = (props: SquareMarkProps) => {
  const { square } = props;

  const containerSize = useAtomValue(containerSizeAtom);
  const boardOrientation = useAtomValue(boardOrientationAtom);

  if (!containerSize) {
    return null;
  }

  const borderWidth = containerSize / 80;
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
        borderTopLeftRadius: "50%",
        borderTopRightRadius: "50%",
        borderBottomLeftRadius: "50%",
        borderBottomRightRadius: "50%",
        borderColor: SQUARE_MARK_COLOR,
        borderWidth: borderWidth,
      }}
    />
  );
};

export default SquareMark;

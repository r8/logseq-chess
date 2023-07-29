import { SQUARE_MARK_COLOR } from "../../../constants/colors";
import { useAtomValue } from "jotai";
import { containerSizeAtom } from "../../../store/containerSizeAtom";

const SquareMark = () => {
  const containerSize = useAtomValue(containerSizeAtom);

  if (!containerSize) {
    return null;
  }

  const borderWidth = containerSize / 100;

  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
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
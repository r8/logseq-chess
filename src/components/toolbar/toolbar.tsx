import { ArrowPathRoundedSquareIcon } from "@heroicons/react/24/solid";
import ToolbarButton from "./toolbarButton";
import { useAtom, useAtomValue } from "jotai";
import { containerSizeAtom } from "../../store/containerSizeAtom";
import { boardOrientationAtom } from "../../store/boardOrientationAtom";

const Toolbar = () => {
  const containerSize = useAtomValue(containerSizeAtom);
  const [boardOrientation, setBoardOrientation] = useAtom(boardOrientationAtom);

  const switchBoardOrientation = () => {
    if (boardOrientation == "white") {
      setBoardOrientation("black");
    } else {
      setBoardOrientation("white");
    }
  };

  if (!containerSize) {
    return null;
  }

  return (
    <div style={{ paddingTop: containerSize / 40 }}>
      <ToolbarButton onClick={switchBoardOrientation}>
        <ArrowPathRoundedSquareIcon />
      </ToolbarButton>
    </div>
  );
};

export default Toolbar;

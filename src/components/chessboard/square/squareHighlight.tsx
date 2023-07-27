import { SQUARE_HIGHLIGHT_COLOR } from "../../../constants/colors";

const SquareHighlight = () => (
  <div
    style={{
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: SQUARE_HIGHLIGHT_COLOR,
    }}
  />
);

export default SquareHighlight;

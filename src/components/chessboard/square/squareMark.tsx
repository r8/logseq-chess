import { SQUARE_MARK_COLOR } from "../../../constants/colors";

const SquareMark = () => (
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
      borderWidth: 2,
    }}
  />
);

export default SquareMark;

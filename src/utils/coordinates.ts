import {
  BoardOrientation,
  Square,
} from "react-chessboard/dist/chessboard/types";
import {
  BLACK_COLUMN_VALUES,
  BLACK_ROWS,
  WHITE_COLUMN_VALUES,
  WHITE_ROWS,
} from "../constants/board";

/**
 * Retrieves the coordinates at the centre of the requested square,
 * relative to the top left of the board (0, 0).
 * Copied from `react-chessboard`
 */
export function getRelativeCoords(
  boardOrientation: BoardOrientation,
  boardWidth: number,
  square: Square,
): {
  x: number;
  y: number;
} {
  const squareWidth = boardWidth / 8;
  const columns =
    boardOrientation === "white" ? WHITE_COLUMN_VALUES : BLACK_COLUMN_VALUES;
  const rows = boardOrientation === "white" ? WHITE_ROWS : BLACK_ROWS;

  const x = columns[square[0]] * squareWidth + squareWidth / 2;
  const y = rows[parseInt(square[1], 10) - 1] * squareWidth + squareWidth / 2;
  return { x, y };
}

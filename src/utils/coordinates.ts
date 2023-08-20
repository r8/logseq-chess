import {
  BoardOrientation,
  Square,
} from "react-chessboard/dist/chessboard/types";

const WHITE_COLUMN_VALUES: { [col in string]: number } = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7,
};

const BLACK_COLUMN_VALUES: { [col in string]: number } = {
  a: 7,
  b: 6,
  c: 5,
  d: 4,
  e: 3,
  f: 2,
  g: 1,
  h: 0,
};

const WHITE_ROWS = [7, 6, 5, 4, 3, 2, 1, 0];
const BLACK_ROWS = [0, 1, 2, 3, 4, 5, 6, 7];

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

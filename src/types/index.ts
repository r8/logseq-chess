import { Square } from "react-chessboard/dist/chessboard/types";

export type ExtendedChessboardProps = {
  /**
   * Array of squares that should be marked with circle. e.g. ['a3', 'a5'].
   * @default []
   */
  markSquares?: Square[];
};

export type CustomSquareRendererProps = {
  /**
   * Array of squares that should be marked with circle. e.g. ['a3', 'a5'].
   * @default []
   */
  markSquares?: Square[];
};

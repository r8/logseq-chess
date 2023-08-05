import { atom } from "jotai";
import { BoardOrientation } from "react-chessboard/dist/chessboard/types";

export const boardOrientationAtom = atom<BoardOrientation>("white");

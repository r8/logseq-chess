import { atom } from "jotai";
import { Position } from "../../types";
import { currentPositionIndexAtom } from "./currentPositionIndexAtom";
import { positionsAtom } from "./positionsAtom";

export const currentPositionAtom = atom<Position>((get) => {
  const index = get(currentPositionIndexAtom);
  const positions = get(positionsAtom);

  const currentPosition = positions[index];

  return currentPosition || {};
});

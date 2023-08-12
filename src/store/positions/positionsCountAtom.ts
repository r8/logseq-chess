import { atom } from "jotai";
import { positionsAtom } from "./positionsAtom";

export const positionsCountAtom = atom<number>((get) => {
  const positions = get(positionsAtom);

  return positions.length;
});

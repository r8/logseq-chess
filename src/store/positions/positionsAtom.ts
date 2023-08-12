import { atom } from "jotai";
import { Position } from "../../types";

export const positionsAtom = atom<Position[]>([]);

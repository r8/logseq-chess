import { atom } from "jotai";
import { Theme } from "../types";

export const themeAtom = atom<Theme>({
  buttonBackgroundColor: null,
});

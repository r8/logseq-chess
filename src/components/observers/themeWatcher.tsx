import { useEffect } from "react";
import { useSetAtom } from "jotai";
import { themeAtom } from "../../store/themeAtom";

const getButtonBackgroundColor = () => {
  let elem = parent.document.querySelector("h1.title");
  let style = getComputedStyle(elem);

  return style.color;
};

const ThemeWatcher = () => {
  const setTheme = useSetAtom(themeAtom);

  useEffect(() => {
    setTheme({
      buttonBackgroundColor: getButtonBackgroundColor(),
    });
  }, []);

  return null;
};

export default ThemeWatcher;

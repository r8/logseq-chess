import { useEffect } from "react";
import { useSetAtom } from "jotai";
import { themeAtom } from "../../store/themeAtom";

const getButtonBackgroundColor = () => {
  const elem = parent.document.querySelector("button.ui__button");
  const style = parent.window.getComputedStyle(elem);

  return style.backgroundColor;
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

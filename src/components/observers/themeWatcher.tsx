import { useEffect } from "react";
import { useSetAtom } from "jotai";
import { themeAtom } from "../../store/themeAtom";

const getButtonBackgroundColor = () => {
  let elem = parent.document.querySelector("button.ui__button");
  let style = getComputedStyle(elem);

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

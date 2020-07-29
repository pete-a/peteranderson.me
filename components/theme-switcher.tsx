import React, { useEffect } from "react";
import { Theme, lightTheme, darkTheme } from "./theme";

export function ThemeSwitcher(
  props: React.PropsWithChildren<{ onSwitch: (theme: Theme) => unknown }>
): JSX.Element {
  useEffect(() => {
    let cookieSet = false;
    if (typeof document !== "undefined") {
      if (document.cookie.indexOf("theme=light") > -1) {
        props.onSwitch(lightTheme);
        cookieSet = true;
      }

      if (document.cookie.indexOf("theme=dark") > -1) {
        props.onSwitch(darkTheme);
        cookieSet = true;
      }
    }
    if (typeof window !== "undefined" && cookieSet === false) {
      let newTheme: Theme = lightTheme;
      if (
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        newTheme = darkTheme;
      }
      props.onSwitch(newTheme);
    }
  }, []);
  return <>{props.children}</>;
}

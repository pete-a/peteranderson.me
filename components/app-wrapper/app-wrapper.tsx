import React, { PropsWithChildren, useEffect, useState } from "react";
import { Theme } from "../theme";
import baseStyles from "./app-wrapper.module.scss";
import darkStyles from "./app-wrapper--dark.module.scss";
import lightStyles from "./app-wrapper--light.module.scss";
import autoStyles from "./app-wrapper--auto.module.scss";
import { createThemedStyles } from "../../utils/styles";
import { YPositionContext } from "../y-position-context";

interface Props {
  theme: Theme;
}

export function AppWrapper({
  theme,
  children,
}: PropsWithChildren<Props>): JSX.Element {
  const styles = createThemedStyles(theme, baseStyles, {
    lightStyles,
    darkStyles,
    autoStyles,
  });

  const [yPosition, setYPosition] = useState(0);

  useEffect(() => {
    function onWindowScroll() {
      window.requestAnimationFrame(() => {
        setYPosition(window.scrollY);
      });
    }

    onWindowScroll();

    window.addEventListener("scroll", onWindowScroll);
    return () => {
      window.removeEventListener("scroll", onWindowScroll);
    };
  }, []);

  return (
    <YPositionContext.Provider value={yPosition}>
      <div className={styles.container}>
        <div className={styles.content}>{children}</div>
      </div>
    </YPositionContext.Provider>
  );
}

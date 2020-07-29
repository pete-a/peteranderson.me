import React from "react";
import { ThemeContext } from "../theme-context";
import styles from "./footer.module.scss";
import darkStyles from "./footer--dark.module.scss";
import lightStyles from "./footer--light.module.scss";
import { joinStyles } from "../../utils/styles";

export function Footer(): JSX.Element {
  return (
    <ThemeContext.Consumer>
      {(theme) => {
        const themeStyles = theme.name === "dark" ? darkStyles : lightStyles;
        return (
          <div className={styles.container}>
            <a href="/">
              <span
                className={joinStyles(
                  styles.peteranderson,
                  themeStyles.peteranderson
                )}
              >
                peteranderson
              </span>
              <span className={joinStyles(styles.me, themeStyles.me)}>.me</span>
            </a>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

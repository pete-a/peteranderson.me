import React from "react";
import { ThemeContext } from "../theme-context";
import styles from "./footer.module.css";
import darkStyles from "./footer--dark.module.css";
import lightStyles from "./footer--light.module.css";
import { joinStyles } from "../../utils/styles";

export function Footer() {
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

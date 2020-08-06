import React from "react";
import { ThemedHeading } from "../components/heading/heading";
import baseStyles from "./404.module.scss";
import darkStyles from "./404--dark.module.scss";
import lightStyles from "./404--light.module.scss";
import { createThemedStyles } from "../utils/styles";
import { ThemeContext } from "../components/theme-context";

function Custom404Page(): JSX.Element {
  return (
    <ThemeContext.Consumer>
      {(theme) => {
        const styles = createThemedStyles(theme, baseStyles, {
          lightStyles,
          darkStyles,
        });
        return (
          <div className={styles.container}>
            <div>
              <div className={styles.title404}>404</div>
              <ThemedHeading size="h1" style={{ marginBottom: "40px" }}>
                Page not found
              </ThemedHeading>
            </div>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default Custom404Page;

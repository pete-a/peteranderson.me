import React from "react";
import { ThemedHeading } from "../../heading/heading";
import baseStyles from "./intro-section.module.scss";
import lightStyles from "./intro-section--light.module.scss";
import darkStyles from "./intro-section--dark.module.scss";
import { ThemeContext } from "../../theme-context";
import { Theme } from "../../theme";
import { createThemedStyles } from "../../../utils/styles";

export function IntroSection(): JSX.Element {
  return (
    <ThemeContext.Consumer>
      {(theme) => {
        const styles = createThemedStyles(theme, baseStyles, {
          lightStyles,
          darkStyles,
        });
        return (
          <div className={styles.intro}>
            <div className={styles.introContent}>
              <Photo theme={theme} cssClass={styles.photo} />
              <ThemedHeading size="h1">
                Hi, I&apos;m Peter{" "}
                <span className={`${styles.hand} ${styles.handStart}`}>👋</span>
              </ThemedHeading>
              <div className={styles.summary}>
                I&apos;m a freelance web developer, specialising in{" "}
                <em>React</em>, <em>TypeScript</em> and <em>Node.js</em>. <br />
                I build complex web applications for both startups and large
                corporations.
              </div>
            </div>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

function Photo(props: { theme: Theme; cssClass: string }): JSX.Element {
  const url = props.theme.name === "dark" ? "/me--dark.png" : "/me.png";
  return (
    <img
      src={url}
      className={props.cssClass}
      alt="Photo of Peter Anderson"
      height={128}
    />
  );
}

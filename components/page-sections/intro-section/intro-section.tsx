import React from "react";
import { ThemedHeading } from "../../heading/heading";
import styles from "./intro-section.module.scss";
import { YPositionContext } from "../../y-position-context";

export function IntroSection(): JSX.Element {
  return (
    <YPositionContext.Consumer>
      {(yPosition) => {
        return (
          <div className={styles.intro}>
            <div
              className={styles.introContent}
              style={{ opacity: Math.max(0, (100 - yPosition / 2) / 100) }}
            >
              <ThemedHeading size="h1">
                Hi there{" "}
                <span className={`${styles.hand} ${styles.handStart}`}>👋</span>
              </ThemedHeading>
              <div className={styles.summary}>
                I am a full stack freelance web developer with over 12 years
                commerical experience
              </div>
            </div>
          </div>
        );
      }}
    </YPositionContext.Consumer>
  );
}

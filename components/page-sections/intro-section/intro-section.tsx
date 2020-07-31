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
              style={{ opacity: Math.max(0, (200 - yPosition / 2) / 100) }}
            >
              <ThemedHeading size="h1">
                Hi, I&apos;m Peter{" "}
                <span className={`${styles.hand} ${styles.handStart}`}>👋</span>
              </ThemedHeading>
              <div className={styles.summary}>
                I&apos;m a full stack web developer, specialising in{" "}
                <em>React</em>, <em>TypeScript</em> and <em>Node.js</em>. <br />
                I&apos;ve built complex web applications for both startups and
                large corporations.
              </div>
            </div>
          </div>
        );
      }}
    </YPositionContext.Consumer>
  );
}

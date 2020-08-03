import React from "react";
import { ThemedHeading } from "../../heading/heading";
import styles from "./intro-section.module.scss";

export function IntroSection(): JSX.Element {
  return (
    <div className={styles.intro}>
      <div className={styles.introContent}>
        <ThemedHeading size="h1">
          Hi, I&apos;m Peter{" "}
          <span className={`${styles.hand} ${styles.handStart}`}>👋</span>
        </ThemedHeading>
        <div className={styles.summary}>
          I&apos;m a full stack web developer, specialising in <em>React</em>,{" "}
          <em>TypeScript</em> and <em>Node.js</em>. <br />I build complex web
          applications for both startups and large corporations.
        </div>
      </div>
    </div>
  );
}

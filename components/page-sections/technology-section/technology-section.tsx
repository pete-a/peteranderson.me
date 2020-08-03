import React from "react";
import { ThemedHeading } from "../../heading/heading";
import { ThemedTechnologyGrid } from "../../technology-grid/technology-grid";
import styles from "./technology-section.module.scss";

export function TechnologySection(): JSX.Element {
  return (
    <div className={styles.container} id="technology">
      <div className={styles.content}>
        <div className={styles.content}>
          <ThemedHeading size="h2">Technology</ThemedHeading>
          <p>
            I use these languages, frameworks and platforms to turn business
            ideas into reality
          </p>
          <ThemedTechnologyGrid />
        </div>
      </div>
    </div>
  );
}

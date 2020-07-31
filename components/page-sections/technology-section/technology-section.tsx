import React, { useRef } from "react";
import { ThemedHeading } from "../../heading/heading";
import { ThemedTechnologyGrid } from "../../technology-grid/technology-grid";
import { YPositionContext } from "../../y-position-context";
import styles from "./technology-section.module.scss";

export function TechnologySection(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <YPositionContext.Consumer>
      {() => {
        const offset = containerRef.current
          ? containerRef.current.getBoundingClientRect().top - 80
          : -1000;

        const windowHeight =
          typeof window !== "undefined" ? window.innerHeight : -1000;

        const opacitiy =
          offset < 0
            ? 1
            : Math.min(Math.cos((offset / windowHeight) * 2) + 0.4, 1);

        return (
          <div className={styles.container} id="technology">
            <div
              ref={containerRef}
              className={styles.content}
              style={{
                opacity: opacitiy,
              }}
            >
              <div className={styles.content}>
                <ThemedHeading size="h2">Technology</ThemedHeading>
                <p>
                  I have extensive experience with these languages, frameworks
                  and platforms:
                </p>
                <ThemedTechnologyGrid />
              </div>
            </div>
          </div>
        );
      }}
    </YPositionContext.Consumer>
  );
}

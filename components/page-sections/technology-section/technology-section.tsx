import React, { useRef } from "react";
import { ThemedHeading } from "../../heading/heading";
import { ThemedTechnologyGrid } from "../../technology-grid/technology-grid";
import { YPositionContext } from "../../y-position-context";

interface Props {
  className?: string;
}

export function TechnologySection(props: Props): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);

  // const offset = containerRef.current ? containerRef.current.offsetTop : 0;

  return (
    <YPositionContext.Consumer>
      {() => {
        // const relativeOffset = Math.max(yPosition - offset + 100, 0);
        // const styles: React.CSSProperties = (relativeOffset > 0) ?  {
        //     position: "sticky",
        //     top: yPosition - 1500
        // } : { position: "inherit", top: 0};
        const styles = {};
        return (
          <div
            style={styles}
            ref={containerRef}
            id="technology"
            className={props.className}
          >
            <ThemedHeading size="h2">Technology</ThemedHeading>
            <p>
              I build complex web applications with these languages, frameworks
              and platforms:
            </p>
            <ThemedTechnologyGrid />
          </div>
        );
      }}
    </YPositionContext.Consumer>
  );
}

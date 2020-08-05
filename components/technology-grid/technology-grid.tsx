import React from "react";
import baseStyles from "./technology-grid.module.scss";
import darkStyles from "./technology-grid--dark.module.scss";
import lightStyles from "./technology-grid--light.module.scss";
import SvgTypescript from "../technology-logos/typescript.svg";
import SvgJavascript from "../technology-logos/javascript.svg";
import SvgPython from "../technology-logos/python.svg";
import SvgReact from "../technology-logos/react.svg";
import SvgRedux from "../technology-logos/redux.svg";
import SvgNodejs from "../technology-logos/nodejs.svg";
import SvgNextjs from "../technology-logos/nextjs.svg";
import SvgGraphql from "../technology-logos/graphql.svg";
import SvgPostgresql from "../technology-logos/postgresql.svg";
import SvgAws from "../technology-logos/aws.svg";
import SvgDocker from "../technology-logos/docker.svg";
import { Theme } from "../theme";
import SvgFastapi from "../technology-logos/fastapi.svg";
import { ThemeContext } from "../theme-context";
import { createThemedStyles } from "../../utils/styles";

const logos: [(props: { theme: Theme }) => JSX.Element, string][] = [
  [SvgTypescript, "https://www.typescriptlang.org/"],
  [SvgJavascript, "https://developer.mozilla.org/en-US/docs/Web/JavaScript"],
  [SvgPython, "https://www.python.org/"],
  [SvgReact, "https://reactjs.org/"],
  [SvgRedux, "https://redux.js.org/"],
  [SvgNextjs, "https://nextjs.org/"],
  [SvgNodejs, "https://nodejs.org/"],
  [SvgGraphql, "https://graphql.org/"],
  [SvgFastapi, "https://fastapi.tiangolo.com/"],
  [SvgAws, "https://aws.amazon.com/"],
  [SvgDocker, "https://www.docker.com/"],
  [SvgPostgresql, "https://www.postgresql.org/"],
];

export const TechnologyGrid = React.memo(
  ({ theme }: { theme: Theme }): JSX.Element => {
    const styles = createThemedStyles(theme, baseStyles, {
      darkStyles,
      lightStyles,
    });

    return (
      <div className={styles.container}>
        <div className={styles.content}>
          {logos.map(([logo, url], i) => (
            <a
              key={`logo-${i}`}
              className={styles.logoContainer}
              style={{ animationDelay: `${100 * i}ms` }}
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              {React.createElement(logo, { theme })}
            </a>
          ))}
        </div>
      </div>
    );
  }
);

export function ThemedTechnologyGrid(): JSX.Element {
  return (
    <ThemeContext.Consumer>
      {(theme) => <TechnologyGrid theme={theme} />}
    </ThemeContext.Consumer>
  );
}

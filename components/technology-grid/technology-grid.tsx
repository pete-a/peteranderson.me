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

const logos = [
  SvgTypescript,
  SvgJavascript,
  SvgPython,
  SvgReact,
  SvgRedux,
  SvgNextjs,
  SvgNodejs,
  SvgGraphql,
  SvgFastapi,
  SvgAws,
  SvgDocker,
  SvgPostgresql,
];

export function TechnologyGrid({ theme }: { theme: Theme }): JSX.Element {
  const styles = createThemedStyles(theme, baseStyles, {
    darkStyles,
    lightStyles,
  });
  const reactLogos = logos.map((logo) => React.createElement(logo, { theme }));

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {reactLogos.map((logo, i) => (
          <div
            key={`logo-${i}`}
            className={styles.logoContainer}
            style={{ animationDelay: `${250 * i}ms` }}
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ThemedTechnologyGrid(): JSX.Element {
  return (
    <ThemeContext.Consumer>
      {(theme) => <TechnologyGrid theme={theme} />}
    </ThemeContext.Consumer>
  );
}

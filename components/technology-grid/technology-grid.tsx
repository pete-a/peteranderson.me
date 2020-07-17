import React from "react";
import styles from "./technology-grid.module.css";
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

export const TechnologyGrid = ({ theme }: { theme: Theme }) => (
  <div className={styles.container}>
    <div className={styles.content}>
      {logos.map((logo, i) => (
        <div key={`logo-${i}`} className={styles.logoContainer}>
          {React.createElement(logo, { theme })}
        </div>
      ))}
    </div>
  </div>
);

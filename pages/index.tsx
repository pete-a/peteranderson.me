import React from "react";
import styles from "./index.module.css";
import { ThemeContext } from "../components/theme-context";
import SvgReact from "../components/technology-logos/react.svg";
import SvgRedux from "../components/technology-logos/redux.svg";
import SvgTypescript from "../components/technology-logos/typescript.svg";
import SvgPython from "../components/technology-logos/python.svg";
import SvgNodejs from "../components/technology-logos/nodejs.svg";
import SvgPostgresql from "../components/technology-logos/postgresql.svg";
import SvgAws from "../components/technology-logos/aws.svg";
import SvgDocker from "../components/technology-logos/docker.svg";
import SvgNextjs from "../components/technology-logos/nextjs.svg";
import SvgLinux from "../components/technology-logos/linux.svg";
import SvgGraphql from "../components/technology-logos/graphql.svg";
import SvgJavascript from "../components/technology-logos/javascript.svg";
import { TechnologyGrid } from "../components/technology-grid/technology-grid";
import { lightTheme } from "../components/theme";

function Index() {
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <>
          <div className={styles.intro}>
            <div className={styles.introContent}>
              <h1>
                Hi there{" "}
                <span className={`${styles.hand} ${styles.handStart}`}>👋</span>
              </h1>
              <div className={styles.summary}>
                I am a full stack freelance web developer with over 12 years
                commerical experience.
              </div>
            </div>
          </div>

          <div id="technology" className={styles.section}>
            <h2 className="bg-huge">Technology</h2>
            <p>
              I primarily work with these languages, frameworks and platforms:
            </p>
            <TechnologyGrid theme={theme} />
          </div>
          <div id="experience" className={styles.section}>
            <h2>Experience</h2>
          </div>
          <div id="blog" className={styles.section}>
            <h2>Blog</h2>
          </div>
        </>
      )}
    </ThemeContext.Consumer>
  );
}

export default Index;

import React from "react";
import styles from "./index.module.css"
import { ThemeContext } from "../components/theme-context";
import SvgReact from "../components/tech-logos/react.svg";
import SvgRedux from "../components/tech-logos/redux.svg";
import SvgTypescript from "../components/tech-logos/typescript.svg";
import SvgPython from "../components/tech-logos/python.svg";
import SvgNodejs from "../components/tech-logos/nodejs.svg";
import SvgPostgresql from "../components/tech-logos/postgresql.svg";
import SvgAws from "../components/tech-logos/aws.svg";
import SvgDocker from "../components/tech-logos/docker.svg";
import SvgNextjs from "../components/tech-logos/nextjs.svg";
import SvgLinux from "../components/tech-logos/linux.svg";
import SvgGraphql from "../components/tech-logos/graphql.svg";
import SvgJavascript from "../components/tech-logos/javascript.svg";
import { TechnologyGrid } from "../components/technology-grid/technology-grid";

function Index() {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <>
                    <div className={styles.intro}>
                        <h1>Hi there <span className={`${styles.hand} ${styles.handStart}`}>👋</span></h1>
                        <div className={styles.summary}>
                            I am a full stack freelance web developer with over 12 years commerical experience.
                    </div>
                    </div>

                    <div id="technology" className={styles.section}>
                        <h2 className="bg-huge">Technology</h2>
                        <p>I primarily work with these languages, frameworks and platforms:</p>
                        <TechnologyGrid />
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
    )
}

export default Index;
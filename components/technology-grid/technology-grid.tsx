import React from "react";
import styles from "./technology-grid.module.css";
import SvgTypescript from "../tech-logos/typescript.svg";
import SvgJavascript from "../tech-logos/javascript.svg";
import SvgPython from "../tech-logos/python.svg";
import SvgReact from "../tech-logos/react.svg";
import SvgRedux from "../tech-logos/redux.svg";
import SvgNodejs from "../tech-logos/nodejs.svg";
import SvgNextjs from "../tech-logos/nextjs.svg";
import SvgGraphql from "../tech-logos/graphql.svg";
import SvgPostgresql from "../tech-logos/postgresql.svg";
import SvgAws from "../tech-logos/aws.svg";
import SvgDocker from "../tech-logos/docker.svg";
import SvgLinux from "../tech-logos/linux.svg";


const logos = [
    SvgTypescript,
    SvgJavascript,
    SvgPython,
    SvgReact,
    SvgRedux,
    SvgNextjs,
    SvgNodejs,
    SvgGraphql,
    SvgPostgresql,
    SvgAws,
    SvgDocker,
    SvgLinux
]

export const TechnologyGrid = () => (
    <div className={styles.container}>
        <div className={styles.content}>
            {logos.map((logo, i) => (
                <div key={`logo-${i}`} className={styles.logoContainer}>
                    {React.createElement(logo)}
                </div>
            ))}
        </div>
    </div>
);
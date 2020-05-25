import React from "react";
import styles from "./index.module.css"
import SvgSkillChart from "../components/skill-chart/skill-chart.svg";
import { ThemeContext } from "../components/theme-context";

function Index() {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <>
                    <div className={styles.intro}>
                        <h1>Hi there <span className={`${styles.hand} ${styles.handStart}`}>👋</span></h1>
                        <div className={styles.summary}>
                            I am a full-stack freelance web developer with over 12 years commerical experience.
                    </div>
                    </div>

                    <div id="skills" className={styles.section}>
                        <h2 className="bg-huge">Skills</h2>
                        <SvgSkillChart height={250} theme={theme || "light"} />
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
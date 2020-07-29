import React from "react";
import styles from "./index.module.scss";
import { ThemeContext } from "../components/theme-context";
import { TechnologyGrid } from "../components/technology-grid/technology-grid";
import { CompanyLogoRotator } from "../components/company-logo-rotator/company-logo-rotator";
import { ThemedExternalLink } from "../components/external-link/external-link";

function Index(): JSX.Element {
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
            <p>
              These are a few of the great companies I&apos;ve been fortunate to
              work for and freelance with:
            </p>
            <CompanyLogoRotator theme={theme} />
          </div>
          <div id="contact-me" className={styles.section}>
            <h2>Contact me</h2>
            <p>
              You can view my{" "}
              <ThemedExternalLink href="https://github.com/pete-a">
                GitHub profile
              </ThemedExternalLink>
              , connect with me on{" "}
              <ThemedExternalLink href="https://www.linkedin.com/in/peter-anderson-30702b32/">
                LinkedIn
              </ThemedExternalLink>
              , or feel free to send me a message via the form below.
            </p>
            <div></div>
          </div>
        </>
      )}
    </ThemeContext.Consumer>
  );
}

export default Index;

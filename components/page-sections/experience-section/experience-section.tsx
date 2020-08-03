import React from "react";
import { ThemeContext } from "../../theme-context";
import { ThemedHeading } from "../../heading/heading";
import { CompanyLogoRotator } from "../../company-logo-rotator/company-logo-rotator";
import styles from "./experience-section.module.scss";

export function ExperienceSection(): JSX.Element {
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <div className={styles.container}>
          <ThemedHeading size="h2">Experience</ThemedHeading>
          <p>
            These are a few of the great companies I&apos;ve been fortunate to
            work for and freelance with:
          </p>
          <CompanyLogoRotator theme={theme} />
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

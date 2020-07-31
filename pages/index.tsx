import React from "react";
import styles from "./index.module.scss";
import { ThemeContext } from "../components/theme-context";
import { CompanyLogoRotator } from "../components/company-logo-rotator/company-logo-rotator";

import { ThemedHeading } from "../components/heading/heading";
import { TechnologySection } from "../components/page-sections/technology-section/technology-section";

import { IntroSection } from "../components/page-sections/intro-section/intro-section";
import { ContactMeSection } from "../components/page-sections/contact-me-section/contact-me-section";

function Index(): JSX.Element {
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <>
          <IntroSection />

          <TechnologySection className={styles.section} />

          <div id="experience" className={styles.section}>
            <ThemedHeading size="h2">Experience</ThemedHeading>
            <p>
              These are a few of the great companies I&apos;ve been fortunate to
              work for and freelance with:
            </p>
            <CompanyLogoRotator theme={theme} />
          </div>
          <ContactMeSection />
        </>
      )}
    </ThemeContext.Consumer>
  );
}

export default Index;

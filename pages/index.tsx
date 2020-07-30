import React from "react";
import styles from "./index.module.scss";
import { ThemeContext } from "../components/theme-context";
import { CompanyLogoRotator } from "../components/company-logo-rotator/company-logo-rotator";
import { ThemedExternalLink } from "../components/external-link/external-link";
import { ThemedHeading } from "../components/heading/heading";
import { YPositionContext } from "../components/y-position-context";
import { TechnologySection } from "../components/page-sections/technology-section/technology-section";
import { ContactForm } from "../components/contact-form/contact-form";

function Index(): JSX.Element {
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <YPositionContext.Consumer>
          {(yPosition) => (
            <>
              <div className={styles.intro}>
                <div
                  className={styles.introContent}
                  style={{ opacity: Math.max(0, (150 - yPosition / 2) / 100) }}
                >
                  <ThemedHeading size="h1">
                    Hi there{" "}
                    <span className={`${styles.hand} ${styles.handStart}`}>
                      👋
                    </span>
                  </ThemedHeading>
                  <div className={styles.summary}>
                    I am a full stack freelance web developer with over 12 years
                    commerical experience.
                  </div>
                </div>
              </div>

              <TechnologySection className={styles.section} />

              <div id="experience" className={styles.section}>
                <ThemedHeading size="h2">Experience</ThemedHeading>
                <p>
                  These are a few of the great companies I&apos;ve been
                  fortunate to work for and freelance with:
                </p>
                <CompanyLogoRotator theme={theme} />
              </div>
              <div id="contact-me" className={styles.section}>
                <ThemedHeading size="h2">Contact me</ThemedHeading>
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
                <ContactForm />
                <div></div>
              </div>
            </>
          )}
        </YPositionContext.Consumer>
      )}
    </ThemeContext.Consumer>
  );
}

export default Index;

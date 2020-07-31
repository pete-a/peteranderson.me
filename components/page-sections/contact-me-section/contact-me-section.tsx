import React from "react";
import { ThemedHeading } from "../../heading/heading";
import { ThemedExternalLink } from "../../external-link/external-link";
import { ContactForm } from "../../contact-form/contact-form";
import styles from "./contact-me-section.module.scss";

export function ContactMeSection(): JSX.Element {
  function mockApiCall(): Promise<"ok" | "error"> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("ok");
      }, 4000);
    });
  }

  return (
    <div id="contact-me" className={styles.container}>
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
      <ContactForm onValidSubmit={mockApiCall} />
    </div>
  );
}

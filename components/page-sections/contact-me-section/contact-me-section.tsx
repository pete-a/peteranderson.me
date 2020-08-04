import React from "react";
import { ThemedHeading } from "../../heading/heading";
import { ThemedExternalLink } from "../../external-link/external-link";
import { ContactForm, MessageData } from "../../contact-form/contact-form";
import styles from "./contact-me-section.module.scss";

export function ContactMeSection(): JSX.Element {
  async function onSubmit(data: MessageData) {
    try {
      const response = await fetch("/api/message", {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        console.error(response);
        return "error";
      }

      const result = await response.json();
      console.log(result);
      return "ok";
    } catch (e) {
      console.error(e);
      return "error";
    }
  }

  return (
    <div className={styles.container}>
      <div>
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
        <ContactForm onValidSubmit={onSubmit} />
      </div>
    </div>
  );
}

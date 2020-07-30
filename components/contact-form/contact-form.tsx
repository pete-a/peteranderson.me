import React from "react";
import { ThemedButton } from "../button/button";
import { ThemedTextField, ThemedTextArea } from "../text-field/text-field";
import styles from "./contact-form.module.scss";

export function ContactForm(): JSX.Element {
  return (
    <div className={styles.container}>
      <form>
        <div className={styles.row}>
          <ThemedTextField label="Name" />
        </div>
        <div className={styles.row}>
          <ThemedTextField label="Work email" type="email" />
        </div>
        <div className={styles.messageRow}>
          <ThemedTextArea label="Message" />
        </div>
        <div className={styles.actionRow}>
          <ThemedButton disabled={false}>Send</ThemedButton>
        </div>
      </form>
    </div>
  );
}

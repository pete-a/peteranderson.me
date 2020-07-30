import React from "react";
import baseStyles from "./text-field.module.scss";
import lightStyles from "./text-field--light.module.scss";
import darkStyles from "./text-field--dark.module.scss";
import { createThemedStyles } from "../../utils/styles";
import { Theme } from "../theme";
import { ThemeContext } from "../theme-context";

interface Props {
  label: string;
  theme: Theme;
  type?: "text" | "email";
}

export function TextField(props: Props): JSX.Element {
  const styles = createThemedStyles(props.theme, baseStyles, {
    lightStyles,
    darkStyles,
  });
  return (
    <input
      type={props.type || "text"}
      aria-label={props.label}
      className={styles.input}
      placeholder={props.label}
    />
  );
}

export function ThemedTextField(props: Omit<Props, "theme">): JSX.Element {
  return (
    <ThemeContext.Consumer>
      {(theme) => <TextField theme={theme} {...props} />}
    </ThemeContext.Consumer>
  );
}

export function TextArea(props: Omit<Props, "type">): JSX.Element {
  const styles = createThemedStyles(props.theme, baseStyles, {
    lightStyles,
    darkStyles,
  });
  return (
    <textarea
      rows={8}
      className={styles.textarea}
      aria-label={props.label}
      placeholder={props.label}
    ></textarea>
  );
}

export function ThemedTextArea(
  props: Omit<Props, "theme" | "type">
): JSX.Element {
  return (
    <ThemeContext.Consumer>
      {(theme) => <TextArea theme={theme} {...props} />}
    </ThemeContext.Consumer>
  );
}

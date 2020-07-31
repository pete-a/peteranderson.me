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
  error?: string;
  disabled?: boolean;
  onChange: (newValue: string) => void;
}

function onInputChange(onChange: (newValue: string) => void) {
  return function (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const newValue = e.target.value;
    onChange(newValue);
  };
}

export function TextField(props: Props): JSX.Element {
  const styles = createThemedStyles(props.theme, baseStyles, {
    lightStyles,
    darkStyles,
  });

  const inputClassNames = props.error
    ? `${styles.input} ${styles.errorInput}`
    : styles.input;

  const onChange = onInputChange(props.onChange);
  return (
    <>
      <input
        type={props.type || "text"}
        aria-label={props.label}
        className={inputClassNames}
        placeholder={props.label}
        onChange={onChange}
        disabled={props.disabled}
      />
      {props.error ? (
        <span className={styles.errorMessage}>{props.error}</span>
      ) : (
        <span className={styles.errorMessage}>&nbsp;</span>
      )}
    </>
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
  const inputClassNames = props.error
    ? `${styles.textarea} ${styles.errorInput}`
    : styles.textarea;

  const onChange = onInputChange(props.onChange);
  return (
    <>
      <textarea
        rows={6}
        className={inputClassNames}
        aria-label={props.label}
        placeholder={props.label}
        onChange={onChange}
        disabled={props.disabled}
      ></textarea>
      {props.error ? (
        <span className={styles.errorMessage}>{props.error}</span>
      ) : (
        <span className={styles.errorMessage}>&nbsp;</span>
      )}
    </>
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

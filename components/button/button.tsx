import React, { PropsWithChildren } from "react";
import baseStyles from "./button.module.scss";
import { Theme } from "../theme";
import { ThemeContext } from "../theme-context";
import { createThemedStyles } from "../../utils/styles";
import lightStyles from "./button--light.module.scss";
import darkStyles from "./button--dark.module.scss";

interface Props {
  theme: Theme;
  disabled?: boolean;
  loading?: boolean;
}

export function Button(props: PropsWithChildren<Props>): JSX.Element {
  const styles = createThemedStyles(props.theme, baseStyles, {
    lightStyles,
    darkStyles,
  });

  if (props.loading === true) {
    return (
      <button disabled={true} className={styles.buttonLoading} type="submit">
        <img
          className={styles.loadingIcon}
          width={20}
          src="/icons/loading-oval.svg"
        />
        <span className={styles.hidden}>{props.children}</span>
      </button>
    );
  }
  return (
    <button disabled={props.disabled} className={styles.button} type="submit">
      {props.children}
    </button>
  );
}

export function ThemedButton(
  props: PropsWithChildren<Omit<Props, "theme">>
): JSX.Element {
  return (
    <ThemeContext.Consumer>
      {(theme) => <Button theme={theme} {...props} />}
    </ThemeContext.Consumer>
  );
}

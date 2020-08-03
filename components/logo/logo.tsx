import React from "react";
import baseStyles from "./logo.module.scss";
import darkStyles from "./logo--dark.module.scss";
import lightStyles from "./logo--light.module.scss";
import { createThemedStyles } from "../../utils/styles";
import { Theme } from "../theme";
import { ThemeContext } from "../theme-context";
import Link from "next/link";

interface Props {
  theme: Theme;
  size: "large" | "small";
}

export function Logo(props: Props): JSX.Element {
  const styles = createThemedStyles(props.theme, baseStyles, {
    lightStyles,
    darkStyles,
  });

  return (
    <div className={`${styles.container} ${styles[props.size]}`}>
      <Link href="/">
        <a>
          <span className={styles.peteranderson}>peteranderson</span>
          <span className={styles.me}>.me</span>
        </a>
      </Link>
    </div>
  );
}

const defaultProps: Pick<Props, "size"> = {
  size: "large",
};

Logo.defaultProps = defaultProps;

export function ThemedLogo(props: Omit<Props, "theme">): JSX.Element {
  return (
    <ThemeContext.Consumer>
      {(theme) => <Logo theme={theme} {...props} />}
    </ThemeContext.Consumer>
  );
}

ThemedLogo.defaultProps = darkStyles;

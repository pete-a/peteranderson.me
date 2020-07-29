import React from "react";
import { createThemedStyles } from "../../utils/styles";
import { Theme } from "../theme";
import baseStyles from "./external-link.module.scss";
import darkStyles from "./external-link--dark.module.scss";
import lightStyles from "./external-link--light.module.scss";
import { ThemeContext } from "../theme-context";
import SvgExternalLink from "../icons/external-link.svg";

interface Props {
  children: React.ReactChildren | string;
  href: string;
  theme: Theme;
}

export function ExternalLink({ href, children, theme }: Props): JSX.Element {
  const styles = createThemedStyles(theme, baseStyles, {
    lightStyles,
    darkStyles,
  });
  return (
    <a href={href} className={styles.link}>
      <span className={styles.content}>{children}</span>
      <SvgExternalLink cssClass={styles.icon} />
    </a>
  );
}

export function ThemedExternalLink(props: Omit<Props, "theme">): JSX.Element {
  return (
    <ThemeContext.Consumer>
      {(theme) => <ExternalLink theme={theme} {...props} />}
    </ThemeContext.Consumer>
  );
}

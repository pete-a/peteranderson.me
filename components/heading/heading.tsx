import React, { PropsWithChildren } from "react";
import baseStyles from "./heading.module.scss";
import darkStyles from "./heading--dark.module.scss";
import lightStyles from "./heading--light.module.scss";
import { createThemedStyles } from "../../utils/styles";
import { Theme } from "../theme";
import { ThemeContext } from "../theme-context";

type HeadingSize = "h1" | "h2" | "h3" | "h4";

interface Props {
  size: HeadingSize;
  theme: Theme;
  style?: React.CSSProperties;
}

export function Heading(props: PropsWithChildren<Props>): JSX.Element {
  const style = createThemedStyles(props.theme, baseStyles, {
    lightStyles,
    darkStyles,
  });
  return (
    <props.size
      style={props.style}
      className={`${style.heading} ${style[props.size]}`}
    >
      {props.children}
    </props.size>
  );
}

export function ThemedHeading(
  props: PropsWithChildren<Omit<Props, "theme">>
): JSX.Element {
  return (
    <ThemeContext.Consumer>
      {(theme) => <Heading theme={theme} {...props} />}
    </ThemeContext.Consumer>
  );
}

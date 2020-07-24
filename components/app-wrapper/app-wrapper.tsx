import React, { PropsWithChildren } from "react";
import { Theme } from "../theme";
import baseStyles from "./app-wrapper.module.scss";
import darkStyles from "./app-wrapper--dark.module.scss";
import lightStyles from "./app-wrapper--light.module.scss";
import autoStyles from "./app-wrapper--auto.module.scss";
import { createThemedStyles } from "../../utils/styles";

interface Props {
  theme: Theme;
}

export function AppWrapper({ theme, children }: PropsWithChildren<Props>) {
  const styles = createThemedStyles(theme, baseStyles, {
    lightStyles,
    darkStyles,
    autoStyles,
  });

  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

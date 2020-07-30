import React from "react";
import styles from "./footer.module.scss";
import { ThemedLogo } from "../logo/logo";

export function Footer(): JSX.Element {
  return (
    <div className={styles.container}>
      <ThemedLogo size="small" />
    </div>
  );
}

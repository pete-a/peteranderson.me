import React from "react";
import styles from "./external-link.module.scss";

interface Props {
  children: React.ReactChildren | string;
  href: string;
}

export function ExternalLink({ href, children }: Props) {
  return (
    <a href={href} className={styles.link}>
      {children}
    </a>
  );
}

import React from "react";
import SunMoonSvg, { IProps } from "./sun-moon.svg";
import styles from "./sun-moon.module.scss";

export function SunMoon(props: IProps): JSX.Element {
  return (
    <span className={styles.container}>
      <SunMoonSvg mode={props.mode} />
    </span>
  );
}

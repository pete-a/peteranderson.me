import React, { useState, useEffect } from "react";
import styles from "./company-logo-rotator.module.scss";
import SvgTelstra from "../company-logos/telstra.svg";
import { Theme } from "../theme";
import SvgQantas from "../company-logos/qantas.svg";
import SvgWestfield from "../company-logos/westfield.svg";

interface Props {
  theme: Theme;
}

export function CompanyLogoRotator({ theme }: Props): JSX.Element {
  const [counter, setCounter] = useState(0);

  const components = [
    <SvgTelstra height={80} key="telstra" />,
    <SvgQantas theme={theme} height={64} key="qantas" />,
    <img
      height={80}
      src={`/companies/data61--${theme.name}.png`}
      key="data61"
    />,
    <SvgWestfield theme={theme} height={64} key="westfield" />,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((oldValue) => (oldValue + 1) % components.length);
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>{components[counter]}</div>
    </div>
  );
}

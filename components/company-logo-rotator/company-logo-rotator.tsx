import React, { useState, useEffect } from "react";
import styles from "./company-logo-rotator.module.scss";
import SvgTelstra from "../company-logos/telstra";
import { Theme } from "../theme";
import SvgQantas from "../company-logos/qantas";
import SvgWestfield from "../company-logos/westfield";

interface Props {
  theme: Theme;
}

export function CompanyLogoRotator({ theme }: Props) {
  const [counter, setCounter] = useState(0);

  const components = [
    <SvgTelstra height={80} />,
    <SvgQantas theme={theme} height={64} />,
    <img height={80} src={`/companies/data61--${theme.name}.png`} />,
    <SvgWestfield theme={theme} height={64} />,
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

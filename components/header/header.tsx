import React, { useState } from "react";
import baseStyles from "./header.module.scss";
import darkStyles from "./header--dark.module.scss";
import lightStyles from "./header--light.module.scss";
import { ThemedToggleSwitch } from "../toggle-switch/themed-toggle-switch";
import { createThemedStyles } from "../../utils/styles";
import { SunMoon } from "../sun-moon/sun-moon";
import { HamburgerMenu } from "../hamburger-menu/hamburger-menu";
import { ThemedHamburgerMenuButton } from "../hamburger-menu-button/hamburger-menu-button";
import { Theme, lightTheme, darkTheme } from "../theme";
import { ThemedSvgGitHub } from "../icons/github.svg";
import { ThemedSvgLinkedIn } from "../icons/linkedin.svg";

interface IProps {
  theme: Theme;
  setTheme: (theme: Theme) => unknown;
}

export function Header({ theme, setTheme }: IProps): JSX.Element {
  const [hamburgerMenuStatus, setHamburgerMenuStatus] = useState<
    "open" | "closed"
  >("closed");

  const styles = createThemedStyles(theme, baseStyles, {
    lightStyles,
    darkStyles,
    autoStyles: {},
  });

  function toggleHamburgerMenuStatus() {
    setHamburgerMenuStatus(hamburgerMenuStatus === "open" ? "closed" : "open");
  }

  function onLinkClick() {
    if (hamburgerMenuStatus === "open") {
      setHamburgerMenuStatus("closed");
    }
  }

  return (
    <div className={styles.fixedContainer}>
      <div className={styles.container}>
        <div className={styles.title}>
          <a href="/">
            <span className={styles.peteranderson}>peteranderson</span>
            <span className={styles.me}>.me</span>
          </a>
        </div>
        <div className={styles.desktopLinks}>
          <a className={styles.navLink} href="#technology">
            Technology
          </a>
          <a className={styles.navLink} href="#experience">
            Experience
          </a>
          <a className={styles.navLink} href="#contact-me">
            Contact me
          </a>
          <div className={styles.spacer} />
          <div className={styles.socialLinksContainer}>
            <a
              aria-label="LinkedIn profile"
              href="https://www.linkedin.com/in/peter-anderson-30702b32/"
            >
              <ThemedSvgLinkedIn height={22} />
            </a>
            <a aria-label="GitHub profile" href="https://github.com/pete-a">
              <ThemedSvgGitHub height={22} />
            </a>
          </div>
          <div>
            <ThemedToggleSwitch
              checked={theme.name === "dark"}
              onToggle={() =>
                setTheme(theme.name === "dark" ? lightTheme : darkTheme)
              }
            />
          </div>
          <div className={styles.sunMoonContainer}>
            <SunMoon mode={theme.name === "light" ? "sun" : "moon"} />
          </div>
        </div>
        <div className={styles.hamburgerButtonContainer}>
          <div className={styles.spacer} />
          <ThemedHamburgerMenuButton
            menuStatus={hamburgerMenuStatus}
            onClick={toggleHamburgerMenuStatus}
          />
        </div>
      </div>
      <div>
        <HamburgerMenu
          status={hamburgerMenuStatus}
          setStatus={setHamburgerMenuStatus}
        >
          <a
            onClick={onLinkClick}
            className={styles.navLink}
            href="#technology"
          >
            Technology
          </a>
          <a
            onClick={onLinkClick}
            className={styles.navLink}
            href="#experience"
          >
            Experience
          </a>
          <a
            onClick={onLinkClick}
            className={styles.navLink}
            href="#contact-me"
          >
            Contact me
          </a>
          <a
            aria-label="LinkedIn profile"
            className={styles.navLink}
            href="https://www.linkedin.com/in/peter-anderson-30702b32/"
          >
            LinkedIn &nbsp;
            <ThemedSvgLinkedIn height={12} />
          </a>
          <a
            onClick={onLinkClick}
            aria-label="GitHub profile"
            className={styles.navLink}
            href="https://github.com/pete-a"
          >
            GitHub &nbsp; <ThemedSvgGitHub height={12} />
          </a>
          <div className={styles.spacer} />
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              padding: "20px",
              background: "rgba(0,0,0,0.02)",
            }}
          >
            <div>
              <ThemedToggleSwitch
                checked={theme.name === "dark"}
                onToggle={() =>
                  setTheme(theme.name === "dark" ? lightTheme : darkTheme)
                }
              />
            </div>
            <div className={styles.sunMoonContainer}>
              <SunMoon mode={theme.name === "light" ? "sun" : "moon"} />
            </div>
          </div>
        </HamburgerMenu>
      </div>
    </div>
  );
}

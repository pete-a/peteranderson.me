import React, { useState } from "react";
import styles from "./header.module.css";
import darkStyles from "./header--dark.module.css";
import lightStyles from "./header--light.module.css";


import { ThemedToggleSwitch } from "../toggle-switch/themed-toggle-switch";
import { joinStyles } from "../../utils/styles";
import { SunMoon } from "../sun-moon/sun-moon";
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import SvgHamburger from "../hamburger-menu-button/hamburger.svg";
import { HamburgerMenu } from "../hamburger-menu/hamburger-menu";
import { ThemedHamburgerMenuButton } from "../hamburger-menu-button/hamburger-menu-button";


interface IProps {
    theme: "light" | "dark" | undefined;
    setTheme: (theme: "light" | "dark") => any;
}

export function Header({ theme, setTheme }: IProps) {
    const [hamburgerMenuStatus, setHamburgerMenuStatus] = useState<"open"|"closed">("closed");
    const themeStyles = theme === "dark" ? darkStyles : lightStyles;

    function toggleHamburgerMenuStatus() {
        setHamburgerMenuStatus(hamburgerMenuStatus === "open" ? "closed" : "open")
    }

    return (
        <>
            <div className={joinStyles(styles.container, themeStyles.container)}>
                <div className={joinStyles(styles.title, themeStyles.title)}>
                    <a href="/"><span className={themeStyles.peteranderson}>peteranderson</span><span className={themeStyles.me}>.me</span></a>
                </div>
                <div className={styles.desktopLinks}>
                    <a className={joinStyles(styles.navLink, themeStyles.navLink)} href="#skills">
                        Technical Skills
                    </a>
                    <a className={joinStyles(styles.navLink, themeStyles.navLink)} href="#experience">
                        Experience
                    </a>
                    <a className={joinStyles(styles.navLink, themeStyles.navLink)} href="#blog">
                        Blog
                    </a>
                    <div className={styles.spacer} />
                    <div>
                        {theme !== undefined && (<ThemedToggleSwitch checked={theme === "dark"} onToggle={() => setTheme(theme === "dark" ? "light" : "dark")} />)}
                    </div>
                    <div className={styles.sunMoonContainer}>
                        <SunMoon mode={theme === "light" ? "sun" : "moon"} />
                    </div>
                </div>
                <div className={styles.hamburgerButtonContainer}>
                    <div className={styles.spacer} />
                    <ThemedHamburgerMenuButton menuStatus={hamburgerMenuStatus} onClick={toggleHamburgerMenuStatus} />
                </div>
            </div>
            <div>
                <HamburgerMenu status={hamburgerMenuStatus} setStatus={setHamburgerMenuStatus}>
                    <a className={joinStyles(styles.navLink, themeStyles.navLink)} href="#skills">
                        Technical Skills
                    </a>
                    <a className={joinStyles(styles.navLink, themeStyles.navLink)} href="#experience">
                        Experience
                    </a>
                    <a className={joinStyles(styles.navLink, themeStyles.navLink)} href="#blog">
                        Blog
                    </a>
                    <div className={styles.spacer} />
                    <div style={{width: "100%", display: "flex", flexDirection: "row", padding: "20px", background: "rgba(0,0,0,0.02)"}}>
                        <div>
                            {theme !== undefined && (<ThemedToggleSwitch checked={theme === "dark"} onToggle={() => setTheme(theme === "dark" ? "light" : "dark")} />)}
                        </div>
                        <div className={styles.sunMoonContainer} >
                            <SunMoon mode={theme === "light" ? "sun" : "moon"} />
                        </div>
                    </div>
                </HamburgerMenu>
            </div>
        </>
    );
}


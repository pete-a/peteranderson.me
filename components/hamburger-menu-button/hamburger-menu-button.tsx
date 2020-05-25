import React from "react";
import SvgHamburger from "./hamburger.svg";
import { ThemeContext } from "../theme-context";
import closedStyles from "./hamburger-menu-button--closed.module.css";
import openStyles from "./hamburger-menu-button--open.module.css";

interface IProps {
    theme: "light" | "dark";
    menuStatus: "open" | "closed";
    onClick: () => unknown;
}

export function HamburgerMenuButton(props: IProps) {
    const styles = props.menuStatus === "open" ? openStyles : closedStyles;

    return (
        <div style={{padding: "20px", margin: "-20px" }} onClick={props.onClick}>
            <SvgHamburger width="18px" color={props.theme === "dark" ? "#fff" : "#001F33"} topBottomBarsStyle={styles.topBottomBar} middleOneStyle={styles.middleOneBar} middleTwoStyle={styles.middleTwoBar} />
        </div>
    );
}

export function ThemedHamburgerMenuButton(props: Omit<IProps, "theme">) {
    return (
        <ThemeContext.Consumer>
            { theme => (
                <HamburgerMenuButton theme={theme || "light"} {...props} onClick={props.onClick} />
            )}
        </ThemeContext.Consumer>
    );
}
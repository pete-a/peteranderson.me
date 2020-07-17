import React from "react";
import SvgHamburger from "./hamburger.svg";
import { ThemeContext } from "../theme-context";
import closedStyles from "./hamburger-menu-button--closed.module.css";
import openStyles from "./hamburger-menu-button--open.module.css";
import darkStyles from "./hamburger-menu-button--dark.module.css";
import lightStyles from "./hamburger-menu-button--light.module.css";
import styles from "./hamburger-menu-button.module.css";
import { joinStyles } from "../../utils/styles";
import { lightTheme, Theme } from "../theme";

interface Props {
    theme: Theme;
    menuStatus: "open" | "closed";
    onClick: () => unknown;
}

export function HamburgerMenuButton(props: Props) {
    const statusStyles = props.menuStatus === "open" ? openStyles : closedStyles;
    const themeStyles = props.theme.name === "dark" ? darkStyles : lightStyles;

    return (
        <div className={joinStyles(styles.container, props.menuStatus === "open" ? themeStyles.openContainer : styles.closedContainer)} onClick={props.onClick}>
            <SvgHamburger width="20px" color={props.theme.name === "dark" ? "#fff" : "#001F33"} topBottomBarsStyle={statusStyles.topBottomBar} middleOneStyle={statusStyles.middleOneBar} middleTwoStyle={statusStyles.middleTwoBar} />
        </div>
    );
}

export function ThemedHamburgerMenuButton(props: Omit<Props, "theme">) {
    return (
        <ThemeContext.Consumer>
            { theme => (
                <HamburgerMenuButton theme={theme || lightTheme} {...props} onClick={props.onClick} />
            )}
        </ThemeContext.Consumer>
    );
}

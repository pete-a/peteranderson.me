import React, { useEffect, useState } from "react";

export function ThemeSwitcher(props: React.PropsWithChildren<{ onSwitch: (theme: "light" | "dark") => any }>) {
    useEffect(() => {
        let cookieSet = false;
        if (typeof document !== "undefined") {
            if (document.cookie.indexOf("theme=light") > -1) {
                props.onSwitch("light")
                cookieSet = true;
            }

            if (document.cookie.indexOf("theme=dark") > -1) {
                props.onSwitch("dark")
                cookieSet = true;
            }
        }
        if (typeof window !== "undefined" && cookieSet === false) {
            let newTheme: "light" | "dark" = "light"
            if (typeof window !== "undefined" && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                newTheme = "dark";
            }
            props.onSwitch(newTheme);
        }
    }, [])
    return (
        <>
            {props.children}
        </>
    )
}
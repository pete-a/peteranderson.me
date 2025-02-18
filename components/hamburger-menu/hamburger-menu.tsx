import React, { PropsWithChildren, useEffect } from "react";
import baseStyles from "./hamburger-menu.module.scss";
import lightStyles from "./hamburger-menu--light.module.scss";
import darkStyles from "./hamburger-menu--dark.module.scss";
import { ThemeContext } from "../theme-context";
import { joinStyles, createThemedStyles } from "../../utils/styles";

interface IProps {
  status: "open" | "closed";
  setStatus: (status: "open" | "closed") => unknown;
}

export function HamburgerMenu({
  status,
  children,
  setStatus,
}: PropsWithChildren<IProps>): JSX.Element {
  if (typeof window !== "undefined" && status === "open") {
    handleWindowResize(setStatus);
  }

  function onClickOutside(e: React.MouseEvent) {
    e.preventDefault();
    setStatus("closed");
  }

  return (
    <ThemeContext.Consumer>
      {(theme) => {
        const statusStyle =
          status === "open" ? baseStyles.open : baseStyles.closed;
        const themeStyles = createThemedStyles(theme, baseStyles, {
          darkStyles,
          lightStyles,
        });
        return (
          <>
            <div className={joinStyles(statusStyle, themeStyles.container)}>
              {children}
            </div>
            {status === "open" && (
              <div className={baseStyles.overlay} onClick={onClickOutside} />
            )}
          </>
        );
      }}
    </ThemeContext.Consumer>
  );
}

function handleWindowResize(setStatus: (status: "open" | "closed") => unknown) {
  useEffect(() => {
    let resizeTimer: NodeJS.Timeout;
    function handleResize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (window.innerWidth > 600) {
          setStatus("closed");
          window.removeEventListener("resize", handleResize);
        }
      }, 250);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
}

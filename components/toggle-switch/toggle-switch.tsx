import React from "react";
import darkStyles from "./toggle-switch--dark.module.scss";
import lightStyles from "./toggle-switch--light.module.scss";
import sharedStyles from "./toggle-switch.module.scss";
import { Theme, lightTheme } from "../theme";

export const ToggleSwitch = (props: {
  checked: boolean;
  theme: Theme;
  onToggle: () => any;
}) => {
  const themeStyles = props.theme.name === "light" ? lightStyles : darkStyles;

  const checkedStyle = props.checked ? sharedStyles.checked : "";
  return (
    <button
      className={`${themeStyles.container} ${sharedStyles.container}`}
      onClick={props.onToggle}
      aria-label={
        props.checked === true ? "Toggle dark mode" : "Toggle light mode"
      }
    >
      <div
        className={`${sharedStyles.toggle} ${themeStyles.toggleTheme} ${checkedStyle}`}
      ></div>
    </button>
  );
};

ToggleSwitch.defaultProps = {
  checked: false,
  theme: lightTheme,
};

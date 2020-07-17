import React from "react";
import darkStyles from "./toggle-switch--dark.module.css";
import lightStyles from "./toggle-switch--light.module.css";
import sharedStyles from "./toggle-switch.module.css";
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

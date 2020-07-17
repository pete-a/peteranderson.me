import React from "react";
import { ThemeContext } from "../theme-context";
import { ToggleSwitch } from "./toggle-switch";

export const ThemedToggleSwitch = (props: {
  checked: boolean;
  onToggle: () => any;
}) => {
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <ToggleSwitch
          theme={theme}
          checked={props.checked}
          onToggle={props.onToggle}
        />
      )}
    </ThemeContext.Consumer>
  );
};

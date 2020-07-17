import React from "react";
import { Theme, lightTheme } from "./theme";

export const ThemeContext = React.createContext<Theme>(lightTheme);
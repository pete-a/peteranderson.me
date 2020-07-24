import { Theme, autoTheme } from "../components/theme";

export function joinStyles(...styles: string[]): string {
  return styles.join(" ");
}

export function reduceStyles(name: string, ...styles: object[]): string {
  function reduce(prev: string, next: object): string {
    const className = next[name];

    if (className === undefined) {
      return prev;
    }

    if (prev === "") {
      return className;
    }

    return `${prev} ${className}`;
  }

  return styles.reduce(reduce, "");
}

type StyleObject = { [key: string]: string };
type AllThemeStyles = {
  lightStyles: StyleObject;
  darkStyles: StyleObject;
  autoStyles?: StyleObject;
};

export function stylesForTheme(
  theme: Theme,
  allThemeStyles: AllThemeStyles
): StyleObject {
  switch (theme.name) {
    case "auto":
      return allThemeStyles.autoStyles || {};
    case "dark":
      return allThemeStyles.darkStyles;
    case "light":
      return allThemeStyles.lightStyles;
  }
}

export function mergeStyles(
  aStyles: StyleObject,
  bStyles: StyleObject
): StyleObject {
  const aKeys = Object.keys(aStyles);
  const bKeys = Object.keys(bStyles);

  const concatKeys = [...aKeys, ...bKeys];
  const keys = concatKeys.filter(
    (item, pos) => concatKeys.indexOf(item) === pos
  );

  return keys.reduce((prev: StyleObject, key: string) => {
    const aValue = aStyles[key] || "";
    const bValue = bStyles[key] || "";
    const newObject = { ...prev };

    let value = "";
    if (aValue === "") {
      newObject[key] = bValue;
      return newObject;
    }

    if (bValue === "") {
      newObject[key] = aValue;
      return newObject;
    }

    newObject[key] = `${aValue} ${bValue}`;
    return newObject;
  }, {});
}

export function createThemedStyles(
  theme: Theme,
  baseStyles: StyleObject,
  allThemeStyles: AllThemeStyles
): StyleObject {
  const themeStyles = stylesForTheme(theme, allThemeStyles);
  return mergeStyles(baseStyles, themeStyles);
}

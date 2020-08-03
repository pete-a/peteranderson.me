import React from "react";
import "./styles.scss";
import { ThemeSwitcher } from "../components/theme-switcher";
import { useEffect, useState } from "react";
import { ThemeContext } from "../components/theme-context";
import { Header } from "../components/header/header";
import Head from "next/head";

import { Theme, lightTheme, darkTheme, autoTheme } from "../components/theme";
import { AppContextType, AppPropsType } from "next/dist/next-server/lib/utils";
import { AppWrapper } from "../components/app-wrapper/app-wrapper";

interface Props {
  themeName: "light" | "dark" | null;
}

export default function MyApp(props: Props & AppPropsType): JSX.Element {
  const { Component, pageProps } = props;

  let initialTheme: Theme = autoTheme;
  if (props.themeName === "dark") {
    initialTheme = darkTheme;
  }
  if (props.themeName === "light") {
    initialTheme = lightTheme;
  }

  const [theme, setTheme] = useState<Theme>(initialTheme);

  useEffect(() => {
    document.cookie = `theme=${theme.name}; SameSite=Lax`;
  }, [theme]);
  return (
    <>
      <Head>
        <title>Peter Anderson | Freelance web developer and consultant</title>
        <meta
          name="description"
          content="I am a full stack freelance web developer with over 12 years commerical experience"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg"></link>
        <link rel="alternate icon" href="/favicon.png"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeContext.Provider value={theme}>
        <ThemeSwitcher onSwitch={setTheme}>
          <AppWrapper theme={theme}>
            <Header theme={theme} setTheme={setTheme} />
            <Component {...pageProps} />
          </AppWrapper>
        </ThemeSwitcher>
      </ThemeContext.Provider>
    </>
  );
}

MyApp.getInitialProps = function (appContext: AppContextType): Props {
  if (appContext.ctx.req?.headers.cookie) {
    const cookie = appContext.ctx.req.headers.cookie;
    if (cookie.indexOf("theme=light") > -1) {
      return { themeName: "light" };
    }
    if (cookie.indexOf("theme=dark") > -1) {
      return { themeName: "dark" };
    }
  }
  return { themeName: null };
};

import "./styles.css";
import { ThemeSwitcher } from "../components/theme-switcher";
import { useEffect, useState } from "react";
import { ThemeContext } from "../components/theme-context";
import { Header } from "../components/header/header";
import Head from "next/head";
import { Footer } from "../components/footer/footer";
import { Theme, lightTheme, darkTheme } from "../components/theme";
import {
  NextPageContext,
  AppContextType,
} from "next/dist/next-server/lib/utils";
import { NextPage } from "next";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp(props) {
  const { Component, pageProps } = props;

  let initialTheme = lightTheme;
  if (props.themeName === "dark") {
    initialTheme = darkTheme;
  }

  const [theme, setTheme] = useState<Theme>(initialTheme);

  const themeClass =
    props.themeName !== null ? `${theme.name}-theme` : `unset-theme`;

  useEffect(() => {
    document.cookie = `theme=${theme.name}`;
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
      <div className={themeClass}>
        <div className="content">
          <ThemeContext.Provider value={theme}>
            <ThemeSwitcher onSwitch={setTheme}>
              <Header theme={theme} setTheme={setTheme} />
              <Component {...pageProps} />
              <Footer />
            </ThemeSwitcher>
          </ThemeContext.Provider>
        </div>
      </div>
    </>
  );
}

MyApp.getInitialProps = function (appContext: AppContextType) {
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

import React from "react";
import "./styles.scss";
import "./prism.scss";
import { ThemeSwitcher } from "../components/theme-switcher";
import { useEffect, useState } from "react";
import { ThemeContext } from "../components/theme-context";
import { Header } from "../components/header/header";
import Head from "next/head";

import { Theme, lightTheme, darkTheme, autoTheme } from "../components/theme";
import { AppContextType, AppPropsType } from "next/dist/next-server/lib/utils";
import { AppWrapper } from "../components/app-wrapper/app-wrapper";
import { useRouter } from "next/router";

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

  const router = useRouter();

  useEffect(() => {
    document.cookie = `theme=${theme.name}; SameSite=Lax; path=/;`;
    document.body.setAttribute("data-theme", theme.name);
  }, [theme]);

  useEffect(() => {
    function handleRouteChange(url: string) {
      gtag("config", "UA-53493739-1", { page_path: url });
    }

    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Freelance web developer | Peter Anderson</title>
        <meta
          name="description"
          content="I am a full stack freelance web developer with over 12 years commerical experience"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg"></link>
        <link rel="alternate icon" href="/favicon.png"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-53493739-1"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'UA-53493739-1');
        `,
          }}
        ></script>
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

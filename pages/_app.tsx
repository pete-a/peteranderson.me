import "./styles.css";
import { ThemeSwitcher } from "../components/theme-switcher";
import { useEffect, useState } from "react";
import { ThemeContext } from "../components/theme-context";
import { Header } from "../components/header/header";
import Head from "next/head";
import { Footer } from "../components/footer/footer";
import { Theme, lightTheme } from "../components/theme";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState<Theme>(lightTheme);

  useEffect(() => {
    document.cookie = `theme=${theme.name}`;
    document.body.setAttribute("class", `${theme.name}-theme`);
  }, [theme]);
  return (
    <>
      <Head>
        <title>Peter Anderson | Freelance web developer and consultant</title>
        <meta
          name="description"
          content="I am a full stack freelance web developer with over 12 years commerical experience"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="content">
        <ThemeContext.Provider value={theme}>
          <ThemeSwitcher onSwitch={setTheme}>
            <Header theme={theme} setTheme={setTheme} />
            <Component {...pageProps} />
            <Footer />
          </ThemeSwitcher>
        </ThemeContext.Provider>
      </div>
    </>
  );
}

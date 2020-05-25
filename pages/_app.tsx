import './styles.css'
import { ThemeSwitcher } from '../components/theme-switcher'
import { useEffect, useState } from 'react'
import { ThemeContext } from '../components/theme-context'
import { Header } from '../components/header/header'
import Head from "next/head";
import { Footer } from '../components/footer/footer'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    const [theme, setTheme] = useState<"light" | "dark" | undefined>(undefined);

    useEffect(() => {
        document.cookie = `theme=${theme}`
        document.body.setAttribute("class", `${theme}-theme`)
    }, [theme])
    return (
        <>
            <Head>
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
    )
}

import '../styles/globals.css'
import {useState, useEffect} from "react";
import {ThemeProvider} from "styled-components";
import {lightTheme, darkTheme, GlobalStyle} from "../utils/themes";

function MyApp({Component, pageProps}) {
    const [theme, setTheme] = useState('light')
    const themeToggle = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
        localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light')
    }

    useEffect(() => {
        // localStorage.setItem('theme', theme)

        const currentTheme = localStorage.getItem('theme')
        if (currentTheme !== theme) setTheme(currentTheme)
        // setTheme(currentTheme)
        // localStorage.setItem('theme', theme)

        // console.log('hereeee')
        // setTheme(currentTheme || 'light')

    }, [theme]);


    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyle/>

            {/*<button style={{ position: 'absolute', marginLeft: '7vw', marginTop: '0.2vw'}} onClick={themeToggle}>THEME</button>*/}
            <img onClick={themeToggle} style={{ position: 'absolute', marginLeft: '4vw', marginTop: '0.2vw', cursor: 'pointer'}} width={30} height={30} src={theme === 'light' ? '/moon.png' : '/sun.png'} alt=""/>
            <Component {...pageProps} setTheme={setTheme} theme={theme}/>
        </ThemeProvider>
    )
}

export default MyApp

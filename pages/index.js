import {GRAPHQL_API} from "../utils/queries";
import HomePage from "./home";
import {gql, request} from "graphql-request";
import {ThemeProvider} from "styled-components";

import {useState, useEffect} from "react";

import {lightTheme, darkTheme, GlobalStyle} from "../utils/themes";

const randomPage = (max) => {
    return Math.floor(Math.random() * max)
}

const GET_RANDOM_CHARACTERS_QUERY = gql`{
    characters(page: ${randomPage(34)}){
        results {
            id
            name
            status
            image
            species
            location {
                name
            }
        }
    }
}`

export const getServerSideProps = async () => {
    const data = await request(GRAPHQL_API, GET_RANDOM_CHARACTERS_QUERY)
    return {props: {characters: data.characters.results}}
}

export default function Home({characters, theme}) {
    console.log(theme)
    // const [theme, setTheme] = useState('light')
    const [charData, setCharData] = useState(characters)
    // const [isLoading, setIsLoading] = useState(true)

    // const themeToggle = () => (theme === 'light' ? setTheme('dark') : setTheme('light'))

    useEffect(() => {
        // setIsLoading(true)
        request(GRAPHQL_API, GET_RANDOM_CHARACTERS_QUERY)
            .then(res => {
                setCharData(res.characters.results)
                // setIsLoading(false)
            })
    }, [theme]);
    //
    // if (isLoading) {
    //     return <p>loading</p>
    // }

    return (
        <div>
            {/*<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>*/}
            {/*    <GlobalStyle/>*/}
                <HomePage characters={charData}/>
            {/*</ThemeProvider>*/}

        </div>
    )
}










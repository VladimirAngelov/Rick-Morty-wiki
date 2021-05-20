import {GRAPHQL_API} from "../utils/queries";
import HomePage from "./home";
import {gql, request} from "graphql-request";

import {useState} from "react";


const randomPage = (max) => {
    return Math.floor(Math.random() * max)
}

const GET_RANDOM_CHARACTERS_QUERY = gql`{
    characters(page: ${1}){
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
    const [charData, setCharData] = useState(characters)

    if (theme !== 'light' && charData.length === 0) {
        request(GRAPHQL_API, GET_RANDOM_CHARACTERS_QUERY)
            .then(res => {
                setCharData(res.characters.results)
            })
    }

    return (
        <div>
            <HomePage characters={charData.splice(0, 10)}/>
        </div>
    )
}










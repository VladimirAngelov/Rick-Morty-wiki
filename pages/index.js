import {GRAPHQL_API} from "../utils/queries";
import HomePage from "./home";
import {gql, request} from "graphql-request";

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

export default function Home({characters}) {
    return (
        <div>
            <HomePage characters={characters}/>
        </div>
    )
}
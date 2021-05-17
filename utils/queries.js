export const GRAPHQL_API = 'https://rickandmortyapi.com/graphql'
import {gql} from 'graphql-request'

export const GET_CHARACTER_QUERY = gql`{
    characters{
        results {
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


export const GET_EPISODE_QUERY = gql`{
    episodes {
        results {
            name
            air_date
            characters {
                name
            }
        }
    }
}`

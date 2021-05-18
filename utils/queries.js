export const GRAPHQL_API = 'https://rickandmortyapi.com/graphql'
import {gql} from 'graphql-request'

// export const getCharacters = page => {
//     return gql`query ($page: Int){
//         characters(page: $page){
//             results {
//                 id
//                 name
//                 status
//                 image
//                 species
//                 location {
//                     name
//                 }
//             }
//         }
//     }`
// }

export const GET_CHARACTERS_QUERY = gql`query ($page: Int){
    characters(page: $page){
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
        info {
            pages
            next
        }
    }
}`

export const GET_EPISODE_QUERY = gql`{
    episodes {
        results {
            id
            name
            air_date
            characters {
                name
            }
        }
    }
}`

import {GET_CHARACTER_QUERY, GRAPHQL_API} from "../utils/queries";
import {request} from 'graphql-request'

const getCharacters = () => request(GRAPHQL_API, GET_CHARACTER_QUERY)

export default getCharacters
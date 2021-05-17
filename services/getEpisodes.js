import {GET_EPISODE_QUERY, GRAPHQL_API} from "../utils/queries";
import {request} from "graphql-request";

const getEpisodes = () => request(GRAPHQL_API, GET_EPISODE_QUERY)

export default getEpisodes
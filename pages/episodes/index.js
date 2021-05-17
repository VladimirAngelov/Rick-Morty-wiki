import {useEffect, useState} from "react";
import getEpisodes from "../../services/getEpisodes";
import Navigation from "../../components/nav";
import {request} from "graphql-request";
import {GET_EPISODE_QUERY, GRAPHQL_API} from "../../utils/queries";

export const getServerSideProps = async () => {
    const data = await request(GRAPHQL_API, GET_EPISODE_QUERY)
    return {props: {episodes: data.episodes.results}}
}

const Episodes = ({episodes}) => {
    // episode: name, air_date, characters
    return (
        <div>
            <Navigation/>
            {episodes?.map(c => <p key={c.name}>{c.name}</p>)}
        </div>
    );
};

export default Episodes;

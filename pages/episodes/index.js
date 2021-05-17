import {useEffect, useState} from "react";
import getEpisodes from "../../services/getEpisodes";
import Navigation from "../../components/nav";
import {request} from "graphql-request";
import {GET_EPISODE_QUERY, GRAPHQL_API} from "../../utils/queries";
import {EpisodesContainer} from "./StyledEpisodeContainer";
import EpisodeCard from "../../components/episodeCard";

export const getServerSideProps = async () => {
		const data = await request(GRAPHQL_API, GET_EPISODE_QUERY)
		return {props: {episodes: data.episodes.results}}
}

const Episodes = ({episodes}) => {
		// episode: name, air_date, characters
		return (
				<>
						<Navigation/>
						<EpisodesContainer>
								{episodes?.map(e => <EpisodeCard key={e.name} episode={e}/>)}
						</EpisodesContainer>
				</>
		);
};

export default Episodes;

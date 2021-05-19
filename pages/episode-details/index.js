import React, {useState} from 'react';
import request, {gql} from "graphql-request";
import {GRAPHQL_API} from "../../utils/queries";
import Navigation from "../../components/nav";
import {EpisodeDetailsElement} from "../../components/styled-components/StyledEpisodeDetails";
import CharacterCard from "../../components/characterCard";
import Characters from "../characters";

export const getServerSideProps = async ({query}) => {
    const GET_EPISODE_QUERY = gql`{
        episodes(filter: {name: "${query.name}"}) {
            results {
                name
                air_date
                characters {
                    name
                    image
                }
            }
        }
    }`

    const data = await request(GRAPHQL_API, GET_EPISODE_QUERY)
    return {props: {episode: data.episodes.results}}
}

function EpisodeDetails({episode}) {
    const [load, setLoad] = useState(false)
    const episodeData = episode[0]
    const halfCharacters = episodeData.characters.slice(0, 10)

    return (
        <>
            <Navigation/>
            <div style={{marginLeft: '7vw', fontSize: '1.2rem'}}><i>Episode:</i> <strong>{episodeData.name}</strong>
            </div>
            <div style={{marginLeft: '7vw', fontSize: '1.5rem', marginTop: '2vh'}}><i>Released Date: </i>
                <strong>{episodeData.air_date}</strong></div>
            <EpisodeDetailsElement>
                <h2>CHARACTERS</h2>
                {!load && halfCharacters.map(c => <CharacterCard key={c.name + c.id} inEpisodeDetails={true} character={c}/>)}
                {load && episodeData.characters.map(c => <CharacterCard key={c.name + c.id} inEpisodeDetails={true} character={c}/>)} <br/>
                {!load && <button onClick={() => setLoad(true)}>Load More</button>}
            </EpisodeDetailsElement>
        </>
    );
}

export default EpisodeDetails;
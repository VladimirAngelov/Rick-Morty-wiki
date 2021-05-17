import {GET_CHARACTER_QUERY, GRAPHQL_API} from "../../utils/queries";
import {useEffect, useState} from "react";
import {request} from 'graphql-request'
import Navigation from "../../components/nav";
import CharacterCard from "../../components/characterCard";
import {CharacterContainer} from './StyledCharacterContainer'

export const getServerSideProps = async () => {
    const data = await request(GRAPHQL_API, GET_CHARACTER_QUERY)
    return {props: {characters: data.characters.results}}
}

const Characters = ({characters}) => {
    // character: name, status, image, species, location.name
    // console.log(characters)
    const data = characters?.map(c => <CharacterCard character={c}/>)

    return (
        <div>
            <Navigation/>
            <CharacterContainer>
                {data}
            </CharacterContainer>
        </div>

    );
}

export default Characters;
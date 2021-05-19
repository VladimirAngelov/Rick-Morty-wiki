import {request} from 'graphql-request'
import {GET_CHARACTERS_QUERY, GRAPHQL_API} from "../../utils/queries";
import Navigation from "../../components/nav";
import CharacterCard from "../../components/characterCard";
import {CharacterContainer} from "../characters/StyledCharacterContainer";
import {useEffect, useState} from "react";

const HomePage = ({characters}) => {
    const data = characters?.splice(0, 10).map(c => <CharacterCard key={c.name} character={c}/>)

    return (
        <div>
            <Navigation/>
            <div style={{textAlign: 'center', marginTop: 30}} className="home-wallpaper">
                <img style={{ height: '10vh'}} src="http://pngimg.com/uploads/rick_morty/rick_morty_PNG7.png" alt=""/>
            </div>
            <CharacterContainer>
                {data}
            </CharacterContainer>
        </div>
    )
}

export default HomePage
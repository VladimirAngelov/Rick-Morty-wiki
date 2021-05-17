import style from './styles/characterCard.module.css'
import LazyLoader from "../../utils/intersectionObserver";
import {CharacterCardDiv} from "./StyledCharacterCard";

const CharacterCard = ({character}) => {
    return (
        <CharacterCardDiv key={character.name}>
            <LazyLoader src={character.image}/>
            <p>Name: {character.name}</p>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Last Location: {character.location.name.split('(Replacement Dimension)')[0]}</p>
        </CharacterCardDiv>
    )
}

export default CharacterCard
import style from './styles/characterCard.module.css'
import {ImageLazyLoader} from "../../utils/intersectionObserver";
import {CharacterCardDiv} from "./StyledCharacterCard";
import Link from "next/link";

const CharacterCard = ({character, inEpisodeDetails, setPage}) => {
    return (
        <Link href={{pathname: '/character-details', query: {name: character.name}}}>
            <CharacterCardDiv>
                <ImageLazyLoader setPage={setPage} inEpisodeDetails={inEpisodeDetails} src={character.image}/>
                <p>{inEpisodeDetails ? character.name : `Name: ${character.name}`}</p>
                {!inEpisodeDetails && <p>Status: {character.status}</p>}
                {!inEpisodeDetails && <p>Species: {character.species}</p>}
                {!inEpisodeDetails && <p>Last Location: {character?.location?.name?.split('(Replacement Dimension)')[0]}</p>}
            </CharacterCardDiv>
        </Link>
    )
}

export default CharacterCard
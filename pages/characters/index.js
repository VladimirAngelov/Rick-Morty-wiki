import {GET_CHARACTERS_QUERY, GRAPHQL_API} from "../../utils/queries";
import {useEffect, useRef, useState} from "react";
import {request} from 'graphql-request'
import Navigation from "../../components/nav";
import CharacterCard from "../../components/characterCard";
import {CharacterContainer} from './StyledCharacterContainer'
// import {getCharacters} from "../../utils/queries";

export const getServerSideProps = async () => {
    const data = await request(GRAPHQL_API, GET_CHARACTERS_QUERY, {
        "page": 1
    })
    return {props: {characters: data.characters.results, info: data.characters.info}}
}



const Characters = ({characters, info}) => {
    const [charData, setCharData] = useState(characters)
    const [page, setPage] = useState(info.next)
    const lastElement = useRef()

    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.map((entry) => {
                if (entry.isIntersecting) {
                    console.log('visible')
                } else {
                    // entry.target.classList.remove('visible')
                }
            });
        }

        const observer = new IntersectionObserver(handleIntersection)

            observer.observe(lastElement);

        // react-intersection-observer !!!!
    }, [lastElement]);

    const data = charData?.map(c => <CharacterCard setPage={setPage} key={c.name + c.id} character={c}/>)

    return (
        <div>
            <Navigation/>
            <CharacterContainer>
                {data}
            </CharacterContainer>
            <div ref={lastElement}>
testElement
            </div>
        </div>
    );
}
export default Characters;
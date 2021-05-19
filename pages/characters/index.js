import {GET_CHARACTERS_QUERY, GRAPHQL_API} from "../../utils/queries";
import {useState} from "react";
import {request} from 'graphql-request'
import Navigation from "../../components/nav";
import CharacterCard from "../../components/characterCard";
import {CharacterContainer} from '../../components/styled-components/StyledCharacterContainer'
import {useInView} from "react-intersection-observer";

export const getServerSideProps = async () => {
    const data = await request(GRAPHQL_API, GET_CHARACTERS_QUERY, {
        "page": 1
    })
    return {props: {characters: data.characters.results, info: data.characters.info}}
}

const Characters = ({characters, info}) => {
    const [charData, setCharData] = useState(characters)
    const [page, setPage] = useState(info.next)
    const {ref, inView} = useInView({rootMargin: '300px'})

    const loadMoreData = async (page) => {
        return await request(GRAPHQL_API, GET_CHARACTERS_QUERY, {page})
    }

    if (inView) {
        loadMoreData(page)
            .then(data => {
                if (page !== data.characters.info.next) {
                    setPage(data.characters.info.next)
                    setCharData([...charData, ...data.characters.results])
                }
            })
    }

    const data = charData?.map(c => <CharacterCard setPage={setPage} key={c.name + c.id} character={c}/>)

    return (
        <div>
            <Navigation/>
            <CharacterContainer>
                <p className="heading">CHARACTERS</p>
                {data}
            </CharacterContainer>
            <div ref={ref}>{`Header inside viewport ${inView}.`}</div>
        </div>
    );
}
export default Characters;
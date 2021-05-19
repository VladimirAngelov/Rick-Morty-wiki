import {GET_CHARACTERS_QUERY, GRAPHQL_API} from "../../utils/queries";
import {useEffect, useRef, useState} from "react";
import {request} from 'graphql-request'
import Navigation from "../../components/nav";
import CharacterCard from "../../components/characterCard";
import {CharacterContainer} from './StyledCharacterContainer'
import {useInView} from "react-intersection-observer";
import {useRouter} from "next/router";

export const getServerSideProps = async () => {
    const data = await request(GRAPHQL_API, GET_CHARACTERS_QUERY, {
        "page": 1
    })
    return {props: {characters: data.characters.results, info: data.characters.info}}
}

const Characters = ({characters, info}) => {
    const [charData, setCharData] = useState(characters)
    const [page, setPage] = useState(1)
    const lastElement = useRef()
    const {ref, inView, entry} = useInView({threshold: 0.25})
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true)

    // useEffect(() => {
    //     setIsLoading(false)
    // }, [page]);

    const loadMoreData = async (page) => {
        return await request(GRAPHQL_API, GET_CHARACTERS_QUERY, {page})
            // .then(data => {
            //     setPage(page + 1)
            //     setIsLoading(true)
            //     console.log(data.characters.info.next)
            // })
    }

    const refreshData = () => {
        router.replace(router.asPath);
    }
    // console.log(page)

    if (inView) {
        // request(GRAPHQL_API, GET_CHARACTERS_QUERY, {"page": page})
        //     .then(data => {
        //         // setCharData(prevData => [...prevData, ...data.characters.results])
        //     })
        // setPage(prevState => prevState + 1)
        // setIsLoading(false)
        loadMoreData(page)
            .then(data => {
                setPage(page + 1)
                setCharData(prevData => [...prevData, ...data.characters.results])
                // setIsLoading(true)
                console.log(data.characters.info.next)
            })
        console.log(page)

    }
    const data = charData?.map(c => <CharacterCard setPage={setPage} key={c.name + c.id} character={c}/>)

    return (
        <div>
            <Navigation/>
            <CharacterContainer>
                {data}
            </CharacterContainer>
            <div ref={ref}>{`Header inside viewport ${inView}.`}</div>
        </div>
    );
}
export default Characters;
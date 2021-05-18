import {withRouter, useRouter} from "next/router";
import request, {gql} from "graphql-request";
import {GRAPHQL_API} from "../../utils/queries";
import {CharDetailsContainer} from './StyledCharacterDetails'
import CharacterCard from "../../components/characterCard";
import Navigation from "../../components/nav";

export const getServerSideProps = async ({query}) => {
    const GET_CHARACTER_QUERY = gql`{
        characters(filter:{name: "${query.name}"}) {
            results {
                name
                status
                image
                species
                location {
                    name
                }
            }
        }
    }`

    const data = await request(GRAPHQL_API, GET_CHARACTER_QUERY)
    return {props: {character: data.characters.results}}
}

function CharacterDetails({character}) {
    // const router = useRouter()
    // console.log(router)
    console.log(character[0])
    return (
        <div>
            <Navigation/>
            <CharDetailsContainer>
                <CharacterCard character={character[0]}/>
            </CharDetailsContainer>
        </div>

    );
}

export default withRouter(CharacterDetails);
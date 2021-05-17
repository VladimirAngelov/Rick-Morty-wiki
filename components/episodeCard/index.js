import {EpisodeCardElement} from './StyledEpisodeCard'

const EpisodeCard = ({episode}) => {
    return (
        <EpisodeCardElement>
            <p>{episode.name}</p>
        </EpisodeCardElement>
    )
}

export default EpisodeCard
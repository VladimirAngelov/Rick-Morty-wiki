import {EpisodeCardElement} from './StyledEpisodeCard'
import Link from "next/link";

const EpisodeCard = ({episode}) => {
    return (
            <EpisodeCardElement>
                {/*<p className="title">{episode.name}</p>*/}
                {/*<p className="air-date">{episode.air_date}</p>*/}
            </EpisodeCardElement>

    )
}

export default EpisodeCard
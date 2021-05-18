import {useRef, useEffect} from 'react';
import {EpisodeCardElement} from "../components/episodeCard/StyledEpisodeCard";
import Link from "next/link";

export const ImageLazyLoader = ({src, inEpisodeDetails, setPage}) => {
    const ref = useRef(null);
    const io = useRef(null);

    useEffect(() => {
        const currentRef = ref.current;
        let ioRef = io.current;
        if (currentRef) {
            ioRef = new IntersectionObserver(
                entries => {
                    entries.forEach(entry => {
                        if (entry.intersectionRatio > 0.25) {
                            ref.current.src = src;
                        }
                    });
                },
                {threshold: 0.25});
            ioRef.observe(currentRef);
        }

        return () => {
            setPage(prevState => prevState + 1)
            ioRef.unobserve(currentRef)
        };

    }, [src]);

    return <img ref={ref} height={!inEpisodeDetails ? 300 : 280} width={!inEpisodeDetails ? 300 : 280} alt=''/>;
}

export const ContentLazyLoader = ({episode}) => {
    const ref = useRef(null);
    const io = useRef(null);

    useEffect(() => {
        const currentRef = ref.current;
        let ioRef = io.current;
        if (currentRef) {
            ioRef = new IntersectionObserver(
                entries => {
                    entries.forEach(entry => {
                        if (entry.intersectionRatio > 0.5) {
                            ref.current.innerHTML = `
                                <p id="title">${episode.name}</p>
                                <div id="air-date">${episode.air_date}</div>
                                <p id="characters-count">Characters: <strong>${episode.characters.length}</strong></p>
                                `
                        }
                    });
                },
                {threshold: 1});
            ioRef.observe(currentRef);
        }

        return () => ioRef.unobserve(currentRef);

    }, [episode]);

    return (
        <Link href={{pathname: '/episode-details', query: {name: episode.name}}}>
            <EpisodeCardElement ref={ref}/>
        </Link>

    )
}
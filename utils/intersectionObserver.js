import { useRef, useEffect } from 'react';

export default function LazyLoader({ src }) {
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
                { threshold: 0.25 });
            ioRef.observe(currentRef);
        }

        return () => ioRef.unobserve(currentRef);

    }, [src]);

    return <img ref={ref} height={300} width={300} alt='' />;
}
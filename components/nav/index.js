import Link from "next/link";

const Navigation = () => {
    return (
        <div>
            <Link href="/">Home</Link>
            <Link href="/characters">Characters</Link>
            <Link href="/episodes">Episodes</Link>
        </div>
    );
}

export default Navigation;
import Link from "next/link";
import {Nav} from './StyledNavigation'

const Navigation = () => {
    return (
        <Nav>
            <Link href="/">Home</Link>
            <Link href="/characters">Characters</Link>
            <Link href="/episodes">Episodes</Link>
        </Nav>
    );
}

export default Navigation;
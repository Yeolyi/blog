import NavButton from "./NavButton";
import "./Nav.css"

export default function NavBar() {
    return (
        <nav>
            <li>
                <NavButton link="dict" title="Dict" />
                <NavButton link="stories" title="Stories" />
            </li>
        </nav>
    );
}
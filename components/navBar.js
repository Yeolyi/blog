import Link from "next/link"
import styles from "./navBar.module.css"

export default function NavBar() {
    return <>
        <header id={styles.navBar}>
            <Logo />
            <NavButtons />
        </header>
    </>
}

function NavButtons() {
    return (
        <nav id={styles.navButtons}>
            <li>
                <NavButton link="/dict" title="Dict" />
                <NavButton link="/stories/til" title="Stories" />
            </li>
        </nav>
    );
}

function Logo() {
    return <Link href="/">
        <a id={styles.logo}>YeolYi</a>
    </Link>
}

function NavButton({title, link}) {
    return (
    <Link href={link}>
        <a className={styles.navButton}>{title}</a>
    </Link>
    )
}
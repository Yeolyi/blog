import Link from "next/link"
import styles from "./navBar.module.css"
import { useRouter } from 'next/router'

export default function NavBar() {
    return <>
        <header id={styles.navBar}>
            <Link href="/"><h2 id={styles.logo}>YeolYi</h2></Link>
            <CategoryList/>
        </header>
    </>
}

const categories = [
    { name: "TIL", link: "/stories/til" },
    { name: "Archive", link: "/stories/archive" },
    { name: "Writing", link: "/stories/writing" },
    { name: "Dict", link: "/dict" },
];

function CategoryList() {
    const router = useRouter();
    return (
        <ul id={styles.categoryList}>
            {
                categories.map(x => {
                    return (
                        <Link href={x.link} key={x.link}>
                            <li className={styles.categoryButton}>
                                {router.pathname.includes(x.link) ? `[${x.name}]` : ` ${x.name} `}
                            </li>
                        </Link>
                    )
                })
            }
        </ul >
    )
}

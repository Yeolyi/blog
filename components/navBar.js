import Link from "next/link"
import styles from "./navBar.module.css"
import { useRouter } from 'next/router'

export default function NavBar() {
    return <>
        <header id={styles.navBar}>
            <Link href="/"><h2>개발자 이성열</h2></Link>
            <CategoryList/>
        </header>
    </>
}

const categories = [
    { name: "TIL", description: "Today I Learned; 매일 꾸준히 천천히", link: "/stories/til" },
    { name: "Archive", description: "인터넷에서 보물찾기", link: "/stories/archive" },
    { name: "Writing", description: "기록할만한 나의 지난 경험들", link: "/stories/writing" },
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
                                {router.pathname.includes(x.link) ? `"${x.name}"` : ` ${x.name} `}
                            </li>
                        </Link>
                    )
                })
            }
        </ul >
    )
}

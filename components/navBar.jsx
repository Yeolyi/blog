import Link from "next/link"
import styles from "./navBar.module.css"
import { useRouter } from 'next/router'

export default function NavBar() {
    return <>
        <header id={styles.navBar}>
            <Link href="/"><h2 id={styles.logo}>YeolYi</h2></Link>
            <CategoryList />
        </header>
    </>
}

export const categories = [
    { name: "기록", link: "/til", description: "매일의 공부를 간단히 기록합니다." },
    { name: "보관", link: "/archive", description: "두고두고 볼만한 정보를 요약해 보관합니다." },
    { name: "경험", link: "/writing", description: "저만의 경험을 기록합니다." },
    { name: "사전", link: "/dict", description: "공부한 모든 것들을 모읍니다." },
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

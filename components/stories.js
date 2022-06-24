import styles from "./stories.module.css"
import { useState } from "react"
import Link from "next/link"

const categories = [
    { name: "#TIL", description: "Today I Learned; 매일 꾸준히 천천히" , link: "/stories/til"},
    { name: "#Archive", description: "인터넷에서 보물찾기", link: "/stories/archive" },
    { name: "#Writing", description: "기록할만한 나의 지난 경험들", link: "/stories/writing" },
]

export default function Stories({type, children}) {
    const [category, setCategory] = useState(categories[0])

    let newCategory = categories.find(x => x.link.endsWith(type)) ?? categories[0];
    if (category.name !== newCategory.name) { setCategory(newCategory); }

    const buttons = categories
    .map(x => { 
        return (
        <Link href={x.link} key={x.link}>
            <button onClick={() => setCategory(x)}>
                {x.name}
            </button> 
        </Link>
        )
    })
    .concat(<div id={styles.currentLink}>{ category.name }</div>)

    return (
        <>
        <nav id={styles.storyNav}>
            <strong>CATEGORIES</strong>
            { buttons }
            <p>{ category.description }</p>
        </nav>
            {children}
        </>
    )
}
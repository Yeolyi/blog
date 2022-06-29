import styles from "./stories.module.css"
import { useState } from "react"

const categories = [
    { name: "TIL", description: "Today I Learned\n매일 간단한 공부 기록" , link: "/til"},
    { name: "Archive", description: "책과 인터넷에서 찾은\n나중에 다시 볼만한 것들", link: "/archive" },
    { name: "Writing", description: "나만 기록할 수 있는\n나만의 지난 경험들", link: "/writing" },
]

export default function Stories({type, children}) {
    const [category, setCategory] = useState(categories[0])

    let newCategory = categories.find(x => x.link.endsWith(type)) ?? categories[0];
    if (category.name !== newCategory.name) { setCategory(newCategory); }

    return (
        <>
        <nav id={styles.storyNav}>
            <div id={styles.currentLink} key={"currentLink"}>{ category.name }</div>
            <p>{ category.description }</p>
        </nav>
            {children}
        </>
    )
}
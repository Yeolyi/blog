import styles from "./stories.module.css"
import { useState } from "react"

const categories = [
    { name: "TIL", description: "Today I Learned\n매일 공부한 것들에 대한 간단한 기록" , link: "/stories/til"},
    { name: "Archive", description: "책과 인터넷에서 찾은\n두고두고 볼만한 것들", link: "/stories/archive" },
    { name: "Writing", description: "나만 기록할 수 있는\n나만의 지난 경험들", link: "/stories/writing" },
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
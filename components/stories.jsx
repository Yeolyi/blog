import styles from "./stories.module.css"
import { useState } from "react"
import Container from "./container";
import { categories } from "./navBar";

export default function Stories({ type, children }) {
    const [category, setCategory] = useState(categories[0])

    let newCategory = categories.find(x => x.link.endsWith(type)) ?? categories[0];
    if (category.name !== newCategory.name) { setCategory(newCategory); }

    return (
        <Container>
            <nav id={styles.storyNav}>
                <div id={styles.currentLink} key={"currentLink"}>{category.name}</div>
                <p>{category.description}</p>
            </nav>
            {children}
        </Container>
    )
}
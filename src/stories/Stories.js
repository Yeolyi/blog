import "./Stories.css"
import { useState } from "react"
import TilRow from "./til/TilList"

const categories = [
    { name: "#TIL", description: "Today I Learned; 매일 꾸준히 천천히" },
    { name: "#Archieve", description: "타인의 지식" },
    { name: "#Writing", description: "기록할만한 나의 지난 경험들" },
]
export default function Stories() {
    const [category, setCategory] = useState(categories[0])
    const buttons = categories
    .map(x => { return <button key={x.name} onClick={() => setCategory(x)}>{x.name}</button> })
    .concat(<p key={category.name+"-current"} className="current-link">{ category.name }</p>)

    let content = <TilRow/>

    switch (category.name) {
        case "#TIL":
            content = <TilRow/>       
            break;
        default:
            content = <p>NOPE</p>
            break;
    }

    return (
        <>
        <nav id="story-nav">
            <strong>CATEGORIES</strong>
            { buttons }
            <p>{ category.description }</p>
        </nav>
        { content }
        </>
    )
}
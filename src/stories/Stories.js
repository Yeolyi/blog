import "./Stories.css"
import { useState } from "react"
import { Outlet, useParams } from "react-router"
import { Link } from "react-router-dom"

const categories = [
    { name: "#TIL", description: "Today I Learned; 매일 꾸준히 천천히" , link: "til"},
    { name: "#Archive", description: "인터넷에서 보물찾기", link: "archive" },
    { name: "#Writing", description: "기록할만한 나의 지난 경험들", link: "writing" },
]
export default function Stories() {
    const startCategory = categories.find(x => window.location.href.endsWith(x.link)) ?? categories[0];
    const [category, setCategory] = useState(startCategory)
    const buttons = categories
    .map(x => { 
        return (
        <Link to={x.link} key={x.link}>
            <button onClick={() => setCategory(x)}>
                {x.name}
            </button> 
        </Link>
        )
    })
    .concat(<p key={category.name+"-current"} className="current-link">{ category.name }</p>)

    return (
        <>
        <nav id="story-nav">
            <strong>CATEGORIES</strong>
            { buttons }
            <p>{ category.description }</p>
        </nav>
        <Outlet/>
        </>
    )
}
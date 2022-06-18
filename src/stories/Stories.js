import "./Stories.css"
import { useState } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"

import TilList from "./til/TilList"
import ArchieveList from "./archive/ArchiveList"

const categories = [
    { name: "#TIL", description: "Today I Learned; 매일 꾸준히 천천히" , link: "/stories/til"},
    { name: "#Archive", description: "인터넷에서 보물찾기", link: "/stories/archive" },
    { name: "#Writing", description: "기록할만한 나의 지난 경험들", link: "/stories/writing" },
]
export default function Stories() {
    const [category, setCategory] = useState(categories[0])

    const type = useParams().type;
    console.log(type);
    let newCategory = categories.find(x => x.link.endsWith(type)) ?? categories[0];
    console.log(category);
    if (category.name !== newCategory.name) { setCategory(newCategory); }

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

    let content = <TilList></TilList>;
    switch (category.name) {
        case "#TIL":
            content = <TilList />;
            break;
        case "#Archive":
            content = <ArchieveList />;
            break;
        default:
            content = <></>;
            break;
    }

    return (
        <>
        <nav id="story-nav">
            <strong>CATEGORIES</strong>
            { buttons }
            <p>{ category.description }</p>
        </nav>
            {content}
        </>
    )
}
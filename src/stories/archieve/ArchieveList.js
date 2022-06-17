import "./Archieve.css"
import { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import { archievePromise } from "./FetchArchieve";
import bookmarksJSON from "../../md/archieve/bookmark.json"


export default function ArchieveList() {
    const [ posts, setPosts ] = useState([]);
    useLayoutEffect(() => {
        archievePromise()
        .then(response => setPosts(response))
    }, []);

    const rows = posts.map((x, i) => {
        return <div className="archieve-row" key={`${i}`}>
            <Link to={x.data.title.replace(/ /g, "_")}><h2>{ x.data.title }</h2></Link>
        </div>;
    });

    const bookmarks = bookmarksJSON.map((x, i) => {
        return <div className="archieve-bookmark" key={`${i}`}>
            <a href={x.link}>{x.title}</a>  
             { "description" in x ? <p>{x.description}</p> : null }
        </div>
    })

    return <>
    <div id="archieve-list">
        {rows}
        </div>
        {bookmarks}
        </>;
}

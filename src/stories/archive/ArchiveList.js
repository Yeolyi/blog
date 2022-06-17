import "./Archive.css"
import { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import { archivePromise } from "./FetchArchive";
import bookmarksJSON from "../../md/archive/bookmark.json"


export default function ArchiveList() {
    const [ posts, setPosts ] = useState([]);
    useLayoutEffect(() => {
        archivePromise()
        .then(response => setPosts(response))
    }, []);

    const rows = posts.map((x, i) => {
        return <div className="archive-row" key={`${i}`}>
            <Link to={x.data.title.replace(/ /g, "_")}><h2>{ x.data.title }</h2></Link>
        </div>;
    });

    const bookmarks = bookmarksJSON.map((x, i) => {
        return <div className="archive-bookmark" key={`${i}`}>
            <a href={x.link}>{x.title}</a>  
             { "description" in x ? <p>{x.description}</p> : null }
        </div>
    })

    return <>
    <div id="archive-list">
        {rows}
        </div>
        {bookmarks}
        </>;
}

import "./Til.css"
import { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import { tilPromise } from "./FetchTil";

export default function TilList() {
    const [ posts, setPosts ] = useState([]);
    useLayoutEffect(() => {
        tilPromise()
        .then(response => setPosts(response))
    }, []);

    return (
        <ol id="til-list">
            { posts.map(post => {
                let ymdString = post.data.date.toISOString().slice(0,10);
                return (
                    <Link to={"til/"+ymdString} key={ymdString}>
                        <h2>{ymdString}</h2>
                    </Link>
                )
            }) }
        </ol>
    );
}

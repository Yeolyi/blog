import "./Til.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { tilPromise } from "./FetchTil";

export default function TilList() {
    const reqMDs = require.context("../../md/til", true, /\.md$/);
    const markdownFiles = reqMDs.keys().map(path => reqMDs(path));
    const [ posts, setPosts ] = useState([]);
    useEffect(() => {
        tilPromise()
        .then(response => setPosts(response))
    }, []);

    return (
        <ol id="til-list">
            { posts.map(post => {
                let ymdString = post.data.date.toISOString().slice(0,10);
                return (
                    <Link to={ymdString} key={ymdString}>
                        <h2>{ ymdString }</h2>
                    </Link>
                )
            }) }
        </ol>
    );
}

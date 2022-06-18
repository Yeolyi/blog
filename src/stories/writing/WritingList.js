import "./Writing.css"

import { useState, useLayoutEffect } from "react";
import { writingPromise } from "./FetchWriting";
import { Link } from "react-router-dom";

export default function WritingList() {
    const [ posts, setPosts ] = useState([]);
    useLayoutEffect(() => {
        writingPromise()
        .then(response => setPosts(response))
    }, []);

    const postList = posts.map(post => {
        return (
        <li className="post-row">
        <Link to={post.data.title.replace(/ /g, "-")} key={post.data.title}>
            <h2>{post.data.title}</h2>
            <h3>{post.data.date.toISOString().slice(0, 10)}</h3>
            </Link>
            </li>
        )
    })

    return <ol>{postList}</ol>;
}
import "./Til.css"
import frontmatter from "frontmatter"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function TilList() {
    const reqMDs = require.context("../../md/til", true, /\.md$/);
    const markdownFiles = reqMDs.keys().map(path => reqMDs(path));
    const [ posts, setPosts ] = useState([]);
    useEffect(() => {
        Promise.all(markdownFiles.map(file =>
            fetch(file)
                .then(response => {
                    return response.text();
                })
                .then(response => {
                    console.dir(response)
                    return frontmatter(response)
                })
                .catch(err => console.error(err))
        ))
        .then(response => {
            response.sort((a, b) => {
                return a.data.date < b.data.date ? 1 : -1;
            })
            setPosts(response);
        })
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

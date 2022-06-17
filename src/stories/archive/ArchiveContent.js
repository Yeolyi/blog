import { useParams } from "react-router";
import { useState, useLayoutEffect } from "react";
import { archivePromise, emptyArchive } from "./FetchArchive";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "../../App.css"
import "./Archive.css"

export default function ArchiveContent() {
    const postName = useParams().postName;

    const [ post, setPost ] = useState(emptyArchive);
    useLayoutEffect(() => {
        archivePromise()
        .then(response => {
            const post = response.find(x=>x.data.title.replace(/ /g, "_") === postName) ?? emptyArchive;
            setPost(post);
        })
        window.scrollTo(0, 0);
    }, []);

    console.log(post);
    const title = post.data.title.replace(/ /g, "\n");

    return (<div id="archive-content">
    <h2>{title}</h2>
    <div id="post-content">
        <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
    </div>
    )
}
import "./Writing.css"
import { useParams } from "react-router";
import { useState, useLayoutEffect, useEffect } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import { emptyWriting, writingPromise } from "./FetchWriting";

export default function WritingContent() {
    const postName = useParams().postName;
    const [ post, setPost ] = useState(emptyWriting);
    useLayoutEffect(() => {
        writingPromise()
        .then(response => {
            const post = response.find(x=>x.data.title.replace(/ /g, "_").includes(postName)) ?? emptyWriting;
            setPost(post);
        })
        window.scrollTo(0, 0);
    }, []);

    return <>
    <div id="post-header">
        <Title title={post.data.title}/>
        <h3>{post.data.date.toISOString().slice(0,10)}</h3>
        </div>
        <div id="post-content">
        <ReactMarkdown 
        transformImageUri={uri => {
            console.log(uri);
            return "/writing/" + post.path.split("/").reverse()[1] + "/" + uri;
        }}>
            {post.content}
        </ReactMarkdown>
        </div>
    </>

}

function Title({title}) {
    const newlined = title.replace(/ /g, "\n");
    return <h2 id="post-title">{newlined}</h2>;
}

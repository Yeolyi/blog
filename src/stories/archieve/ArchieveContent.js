import { useParams } from "react-router";
import { useState, useLayoutEffect } from "react";
import { archievePromise } from "./FetchArchieve";

export default function ArchieveContent() {
    const postName = useParams().postName;

    const [ post, setPost ] = useState({});
    useLayoutEffect(() => {
        archievePromise()
        .then(response => {
            const post = response.find(x=>x.data.title.replace(/ /g, "_") === postName);
            setPost(post);
        })
        window.scrollTo(0, 0);
    }, []);

    return (<>
        <p>{post.content}</p>
    </>
    )
}
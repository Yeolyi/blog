import "./Dict.css"
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { emptyDict } from "./DictPromise";

export default function Dict() {
    const location = useLocation();
    const path = location.pathname

    let [post, setPost] = useState(emptyDict);

    useEffect(() => {
        fetch("/md/dict/index.md")
        .then(response => response.text())
        .then(x => setPost(x))
    }, []);

    console.log(post);
    return <> 
            <nav>
                <p id="nav-title">Dictionary</p>
                <p id="nav-description">기초를 위한 컴퓨터 이론 공부</p>
            </nav>
            <div id="dict-list">
            <ReactMarkdown
        components={{
            a: props => {
                if (props.href.startsWith("https")) {
                    return <a href={props.href}>{props.children}</a>
                }
                return <Link to={path+"/"+props.href}>{props.children}</Link>
            }
        }}
        >{post}</ReactMarkdown>
        </div>
        </>
}

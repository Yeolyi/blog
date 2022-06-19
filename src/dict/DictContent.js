import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import { dictPromise, emptyDict } from './DictPromise';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import frontmatter from 'frontmatter';
import { Link } from 'react-router-dom';

export default function DictContent() {
    const location = useLocation();
    const path = location.pathname
    console.log(location.pathname);
    let [post, setPost] = useState(emptyDict)

    useEffect(() => {
        fetch("/md" + location.pathname + "/index.md")
        .then(x => x.text())
        .then(x => frontmatter(x))
        .then(x => setPost(x))
    }, [path])

    return <div id='post-content'>
        <ReactMarkdown
        components={{
            a: props => {
                return <Link to={path+"/"+props.href}>{props.children}</Link>
            }
        }}
        >{post.content}</ReactMarkdown>
    </div>
}
// http://localhost:3000/dict/cs/hanoi_tower
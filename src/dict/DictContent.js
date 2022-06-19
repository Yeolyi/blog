import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import { dictPromise, emptyDict } from './DictPromise';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import frontmatter from 'frontmatter';
import { Link } from 'react-router-dom';

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import * as style from 'react-syntax-highlighter/dist/esm/styles/prism'
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import swift from 'react-syntax-highlighter/dist/cjs/languages/prism/swift'
import java from 'react-syntax-highlighter/dist/cjs/languages/prism/java'
import c from 'react-syntax-highlighter/dist/cjs/languages/prism/c'
import cpp from 'react-syntax-highlighter/dist/cjs/languages/prism/cpp'

SyntaxHighlighter.registerLanguage('javascript', javascript)
SyntaxHighlighter.registerLanguage('swift', swift)
SyntaxHighlighter.registerLanguage('java', java)
SyntaxHighlighter.registerLanguage('c', c)
SyntaxHighlighter.registerLanguage('cpp', cpp)

export default function DictContent() {
    const location = useLocation();
    const path = location.pathname

    let [post, setPost] = useState(emptyDict)

    useEffect(() => {
        fetch("/md" + location.pathname + "/index.md")
        .then(x => x.text())
        .then(x => frontmatter(x))
        .then(x => replaceContent(x, path))
        .then(x => setPost(x))
    }, [path])

    return <>
    <h2 id="post-title">{post.data.title.replace(/ /g, "\n")}</h2>
    <div id='post-content'>
        <ReactMarkdown
        components={{
            a: props => {
                if (props.href.startsWith("http")) {
                    return <a href={props.href}>{props.children}</a>
                }
                return <Link to={path+"/"+props.href}>{props.children}</Link>
            },
            // https://github.com/remarkjs/react-markdown#use-custom-components-syntax-highlight
            code({node, inline, className, children, ...props}) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                <SyntaxHighlighter
                    children={String(children).replace(/\n$/, '')}
                    style={style.prism}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                />
                ) : (
                <code className={className} {...props}>
                    {children}
                </code>
                )
            }
        }}
        transformImageUri={uri => {
            return "/md" + path + "/" + uri;
        }}
        >{post.content}</ReactMarkdown>
    </div>
    </>
}

async function replaceContent(post, path) {
    const newContent = await replaceAsync(post.content, /!@([^@!]+)@!/g, async (a,x) => {
        const response = await fetch("/md" + path + "/" + x);
        const code = await response.text();
        return `\`\`\`${x.split(".")[1]}\n${code}\n\`\`\``;
    });
    post.content = newContent
    return post;
}

async function replaceAsync(str, regex, asyncFn) {
    const promises = [];
    str.replace(regex, (match, ...args) => {
        const promise = asyncFn(match, ...args);
        promises.push(promise);
    });
    const data = await Promise.all(promises);
    return str.replace(regex, () => data.shift());
}
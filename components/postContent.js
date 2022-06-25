import ReactMarkdown from "react-markdown"
import Image from "next/image"
import styles from "./postContent.module.css"

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import * as style from 'react-syntax-highlighter/dist/cjs/styles/prism'
import codeTheme from "./codeTheme"
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

export default function PostContent({ path, children }) {
    return (
        <div id={styles.postContent}>
            <ReactMarkdown
                components={{
                    img: image => {
                        return <Image src={"/images/" + image.src} alt="" title="" width="100%" height="50%" layout="responsive" objectFit="contain" />
                    },
                    // https://github.com/remarkjs/react-markdown#use-custom-components-syntax-highlight
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                            <SyntaxHighlighter
                                style={codeTheme}
                                language={match[1]}
                                PreTag="div"
                                {...props}
                            >{String(children).replace(/\n$/, '')}</SyntaxHighlighter>
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        )
                    }
                }}
                transformLinkUri={x => {
                    if (path) {
                        if (x.startsWith("http")) {
                            return x
                        }
                        return "/dict/" + path.join("/") + "/" + x;
                    } else {
                        return x;
                    }
                }}
            >
                {children}
            </ReactMarkdown>
        </div>
    )
}

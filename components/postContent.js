import ReactMarkdown from "react-markdown"
import Image from "next/image"
import path from 'path';

export default function PostContent({ children }) {
    return (
        <div id="postContent">
            <ReactMarkdown
                components={{
                    img: image => {
                        return <Image src={image.src} width="500" height="500" />
                    }
                }}
            >
                { children }
            </ReactMarkdown>
        </div>
    )
}
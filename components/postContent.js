import ReactMarkdown from "react-markdown"
import Image from "next/image"
import styles from "./postContent.module.css"
import { useRouter } from "next/router"

export default function PostContent({ path, children }) {
    return (
        <div id={styles.postContent}>
            <ReactMarkdown
                components={{
                    img: image => {
                        return <Image src={"/images/"+image.src} alt="" title="" width="100%" height="50%" layout="responsive" objectFit="contain"/>
                    }
                }}
                transformLinkUri={ x => {
                    if (path) {
                        if (x.startsWith("http")) {
                            return x
                        }
                        return "/dict/"+path.join("/")+"/"+x;
                    } else {
                        return x;
                    }
                }}
            >
                { children }
            </ReactMarkdown>
        </div>
    )
}
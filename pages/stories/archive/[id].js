import { getAllPostIds, getPostData } from "../../../lib/posts"
import styles from "./[id].module.css"
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function ArchiveContent({ postData }) {
    return <div id={styles.archiveContent}>
        <h2>{postData.title.replace(/ /g, "\n")}</h2>
        <ReactMarkdown>{postData.content}</ReactMarkdown>
    </div>
}

export function getStaticPaths() {
    const paths = getAllPostIds("archive");
    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const postData = await getPostData("archive", params.id);
    return {
        props: {
            postData
        }
    };
}
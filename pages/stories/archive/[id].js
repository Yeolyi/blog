import { getAllPostIds, getPostData } from "../../../lib/posts"
import styles from "./[id].module.css"

export default function ArchiveContent({ postData }) {
    return <div id={styles.archiveContent}>
        <h2>{postData.title.replace(/ /g, "\n")}</h2>
        <div id="postContent" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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
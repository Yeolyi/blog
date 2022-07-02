import { getAllPostIds, getPostData } from "../../lib/posts"
import styles from "./[id].module.css"
import PostContent from "../../components/postContent"
import { archiveTheme } from "../../styles/color"

export default function ArchiveContent({ postData }) {
    return <div id={styles.archiveContent}>
        <div id={styles.archiveHeader} style={{backgroundColor: archiveTheme}}>
            <h2>{postData.title.replace(/ /g, "\n")}</h2>
            <h3>{postData.subtitle}</h3>
        </div>
        <PostContent>{postData.content}</PostContent>
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
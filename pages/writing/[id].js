import { getAllPostIds, getPostData } from "../../lib/posts";
import styles from "./[id].module.css"
import PostContent from "../../components/postContent";

export default function WritingContent({ postData }) {
    return <>
        <div id={styles.postHeader}>
            <h2>{postData.title.replace(/ /g, "\n")}</h2>
            <h3>{postData.date}</h3>
        </div>
        <PostContent>{postData.content}</PostContent>
    </>
}

export function getStaticPaths() {
    const paths = getAllPostIds("writing");
    console.log(paths);
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData("writing", params.id);
    return {
        props: {
            postData
        }
    }
}
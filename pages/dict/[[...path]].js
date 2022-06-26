import { getAllDictIDs, getPostData } from "../../lib/posts";
import PostContent from "../../components/postContent";
import styles from "./[[...path]].module.css"

export default function Dict({ postData, path }) {
    return <>
        <h2 id={styles.postTitle}>{postData.title}</h2>
        <PostContent path={path}>{postData.content}</PostContent>
    </>
}

export function getStaticPaths() {
    const paths = getAllDictIDs();
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = params.path ? await getPostData("dict", ...params.path) : await getPostData("dict"); 
    return {
        props: {
            postData,
            path: params.path ?? []
        }
    }
}
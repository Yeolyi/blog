import { getAllDictIDs, getPostData } from "../../lib/posts";
import PostContent from "../../components/postContent";
import styles from "./[[...path]].module.css"
import Container from "../../components/container";

export default function Dict({ postData, path }) {
    return <Container>
        <div id={styles.postHeader}>
            <h2 id={styles.postTitle}>{postData.title}</h2>
            {postData.subtitle ? <h3 id={styles.postSubtitle}>{postData.subtitle}</h3> : null}
        </div>
        <PostContent path={path}>{postData.content}</PostContent>
    </Container>
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
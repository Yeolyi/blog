import Stories from "../../components/stories";
import { getSortedPostsData } from "../../lib/posts";
import styles from "./writing.module.css"
import Link from "next/link";

export default function Writing({ postData }) {
    const postList = postData.map(x => <PostRow postData={x} key={x.id}/>)

    return <Stories type="writing">
        <ol>{postList}</ol>
    </Stories>
}

function PostRow({postData}) {
    return (
        <li className={styles.postRow}>
            <Link href={`/stories/writing/${postData.id}`}>
                <a>
                    <h2>{postData.title}</h2>
                    <h3>{postData.date}</h3>
                </a>
            </Link>
        </li>
    )
}

export function getStaticProps() {
    const postData = getSortedPostsData("writing");
    return {
        props: {
            postData
        }
    }
}
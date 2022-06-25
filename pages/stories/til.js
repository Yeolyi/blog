import styles from "./til.module.css"
import { getSortedPostsData } from "../../lib/posts";
import Stories from "../../components/stories";
import Link from "next/link";

export default function TilList({ allPostsData, bookmarks }) {
    return (
        <Stories type="til">
            <ol id={styles.tilList}>
                {allPostsData.map(post => {
                    return (
                        <Link href={"til/" + post.id} key={post.id}>
                            <a>{post.date}</a>
                        </Link>
                    )
                })}
            </ol>
        </Stories>
    );
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData("til");
    return {
        props: {
            allPostsData
        },
    };
}

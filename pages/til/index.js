import styles from "./index.module.css"
import { getSortedPostsData } from "../../lib/posts";
import Stories from "../../components/stories";
import Link from "next/link";

export default function TilList({ allPostsData }) {

    return (
        <Stories type="til">
            <ol id={styles.tilList}>
                {allPostsData.map(post => {
                    const timeTables = Object.keys(post.time_table)
                        .join(", ");
                    return (
                        <Link href={"/til/" + post.id} key={post.id}>
                            <div className={styles.tilRow}>
                                <a>{post.date}</a>
                                <h3>{timeTables}</h3>
                            </div>
                        </Link>
                    )
                })}
            </ol>
        </Stories>
    );
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData("til");
    console.log(allPostsData);
    return {
        props: {
            allPostsData
        },
    };
}

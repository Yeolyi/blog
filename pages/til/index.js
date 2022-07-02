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
                        <div className={styles.tilRow} key={post.id}>
                            <Link href={"/til/" + post.id} >
                                <a>{post.date}</a>
                            </Link>
                            <h3>{timeTables}</h3>
                        </div>
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

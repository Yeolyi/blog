import Stories from "../../components/stories";
import { getSortedPostsData } from "../../lib/posts";
import styles from "./index.module.css"
import Link from "next/link";
import Image from "next/image";
import { writingTheme } from "../../styles/color";

export default function Writing({ postData }) {
    const postList = postData.map(x => <PostRow postData={x} key={x.id} />)

    return <Stories type="writing">
        <ol>{postList}</ol>
    </Stories>
}

function PostRow({ postData }) {
    return (
        <Link href={`/writing/${postData.id}`}>
            <li className={styles.postRow}>
                <a>
                    <h2>{postData.title}</h2>
                    <h3>{postData.subtitle}</h3>
                </a>
                <Image
                    src={`/images/${postData.id}.png`}
                    width="300px"
                    height="200px"
                    alt=""
                    style={{ borderRadius: "5px", backgroundColor: writingTheme }}
                ></Image>
                <h3 className={styles.postDate}>{postData.date}</h3>
            </li>
        </Link >
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
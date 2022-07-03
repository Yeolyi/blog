import { getAllPostIds, getPostData } from "../../lib/posts";
import styles from "./[id].module.css"
import PostContent from "../../components/postContent";
import Image from "next/image";
import { writingTheme } from "../../styles/color";

export default function WritingContent({ postData }) {
    return <>
        <div id={styles.postHeader} style={{ backgroundColor: writingTheme }}>
            <div id={styles.imageWrapper}>
                <Image
                    src={`/images/${postData.id}.png`}
                    layout="fill"
                    objectFit="cover"
                    alt=""
                    priority={true}
                >
                </Image>
            </div>
            <div id={styles.postHeaderContent}>
                <h2>{postData.title.replace(/ /g, "\n")}</h2>
                <h3>{postData.subtitle}</h3>
                <p>{postData.date}</p>
            </div>
        </div>

        <div id={styles.postText}>
            <PostContent>{postData.content}</PostContent>
        </div>
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
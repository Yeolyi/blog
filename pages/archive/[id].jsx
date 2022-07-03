import { getAllPostIds, getPostData } from "../../lib/posts"
import styles from "./[id].module.css"
import PostContent from "../../components/postContent"
import { archiveTheme } from "../../styles/color"
import Image from "next/image"
import Container from "../../components/container"

export default function ArchiveContent({ postData }) {
    return <Container>
        <div id={styles.archiveHeader} style={{ backgroundColor: archiveTheme }}>
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
            <div id={styles.archiveHeaderContent}>
                <h2>{postData.title.replace(/ /g, "\n")}</h2>
                <h3>{postData.subtitle}</h3>
            </div>
        </div>

        <div id={styles.archiveText}>
            <PostContent>{postData.content}</PostContent>
        </div>
    </Container>
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
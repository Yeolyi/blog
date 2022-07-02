import Stories from "../../components/stories";
import { getBookmarks, getSortedPostsData } from "../../lib/posts";
import styles from "./index.module.css"
import Link from "next/link";
import Image from "next/image";

export default function Archive({ allPostsData, bookmarkData }) {
    const postRows = allPostsData.map(x => <PostRow postData={x} key={x.id} />);
    const bookmarks = bookmarkData.map(x => <Bookmark bookmark={x} key={x.id} />)

    return <Stories type="archive">
        <ol id={styles.archiveList}>
            {postRows}
        </ol>
        <ol>
            {bookmarks}
        </ol>
    </Stories>
}

function PostRow({ postData }) {
    return (
        <Link href={`/archive/${postData.id}`}>
            <div className={styles.archiveRow}>
                <a>{postData.title}</a>
                <h3>{postData.subtitle}</h3>
                {
                    <Image
                        src={`/images/${postData.id}.jpg`}
                        width="300px"
                        height="200px"
                        alt=""
                        style={{ borderRadius: "5px" }}
                    ></Image>
                }
            </div>
        </Link >
    )
}

function Bookmark({ bookmark }) {
    return <div className={styles.archiveBookmark}>
        <Link href={bookmark.link}><a>{bookmark.title}</a></Link>
        {"description" in bookmark ? <p>{bookmark.description}</p> : null}
    </div>
}

export function getStaticProps() {
    const allPostsData = getSortedPostsData("archive");
    const bookmarkData = getBookmarks();
    return {
        props: {
            allPostsData,
            bookmarkData
        }
    }
}
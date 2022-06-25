import Stories from "../../components/stories";
import { getBookmarks, getSortedPostsData } from "../../lib/posts";
import styles from "./archive.module.css"
import Link from "next/link";

export default function Archive({ allPostsData, bookmarkData }) {
    const postRows = allPostsData.map(x => <PostRow postData={x} /> );
    const bookmarks = bookmarkData.map( x => <Bookmark bookmark={x} /> )

    return <Stories type="archive">
        <div id={styles.archiveList}>
            {postRows}
        </div>
        {bookmarks}
    </Stories>
}

function PostRow({postData}) {
    return <div className={ styles.archiveRow } key={postData.id}>
            {/* 이게 최선? */}
            <Link href={`archive/${postData.id}`}>  
                <a><h2>{postData.title}</h2></a>
            </Link>
        </div>;
}

function Bookmark({bookmark}) {
    return <div className={styles.archiveBookmark} key={bookmark.title}>
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
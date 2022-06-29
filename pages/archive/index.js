import Stories from "../../components/stories";
import { getBookmarks, getSortedPostsData } from "../../lib/posts";
import styles from "./index.module.css"
import Link from "next/link";

export default function Archive({ allPostsData, bookmarkData }) {
    const postRows = allPostsData.map(x => <PostRow postData={x} key={x.id}/> );
    const bookmarks = bookmarkData.map( x => <Bookmark bookmark={x} key={x.id}/> )

    return <Stories type="archive">
        <ol id={styles.archiveList}>
            {postRows}
        </ol>
        <ol>
            {bookmarks}
        </ol>
    </Stories>
}

function PostRow({postData}) {
    return <div className={ styles.archiveRow }>
            {/* 이게 최선? */}
            <Link href={`/archive/${postData.id}`}>  
                <a>{postData.title}</a>
            </Link>
        </div>;
}

function Bookmark({bookmark}) {
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
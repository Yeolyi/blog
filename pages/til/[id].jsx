import { getAllPostIds, getPostData } from "../../lib/posts";
import styles from "./[id].module.css"
import PostContent from "../../components/postContent"
import Container from "../../components/container";

export default function TilContent({ postData }) {
    return (<Container>
        <Date date={postData.date} />
        <TimeTable {...postData.time_table} />
        <PostContent>{ postData.content }</PostContent>
    </Container>
    )
}

function Date({date}) {
    const comp = date.split("-")
    const dates = comp.map((x, i) => {
        return <h2 key={i}>{x}</h2>
    })
    return <div id={styles.tilDate}>{dates}</div>;
}

function TimeTable(timeTable) {
    return <div id={styles.timeTable}>
        {
            Object.entries(timeTable).map(([k, v]) => {
                return <TimeTableRow title={k} minute={v} key={k} ></TimeTableRow>
            })
        }
    </div>
}

function TimeTableRow({ title, minute }) {
    return <div className={styles.timeTableElement}>
        <h2>{title}</h2>
        <h3>{minute}</h3>
    </div>
}

export function getStaticPaths() {
    const paths = getAllPostIds("til");
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const postData = await getPostData("til", params.id);
    return {
        props: {
            postData,
        },
    };
}
import { useParams } from "react-router";

export default function TilContent() {
    const tilDate = useParams().tilDate;
    
    return (<>
        {/* <p>{ data.date }</p>
        <p>{ data.time_table.toString() }</p>
        <p>{ content }</p> */}
        </>
    )
}
import { useParams } from "react-router";
import { useLayoutEffect, useState } from "react";
import { tilPromise, emptyTil } from "./FetchTil";

export default function TilContent() {
    const tilDate = useParams().tilDate;
    const [ content, setContent ] = useState(emptyTil);
    useLayoutEffect(() => {
        tilPromise()
        .then(response => {
            const content = response.find(x=>x.data.date.toISOString().slice(0,10) === tilDate);
            setContent(content);
        })
        window.scrollTo(0, 0);
    }, []);

    return (<>
        <Date date={tilDate} />
        <TimeTable {...content.data.time_table}/>
        <p>{content.content}</p>
    </>
    )
}

function Date({date}) {
    const comp = date.split("-")
    const dates = comp.map((x, i) => {
        return <h2 key={i}>{x}</h2>
    })
    return <div id="til-date">{dates}</div>;
}

function TimeTable(timeTable) {
    return <div id="time-table">
        {
            Object.entries(timeTable).map(([k,v]) => {
                return <TimeTableRow title= {k} minute= {v} key={k} ></TimeTableRow>
            })
        }
    </div>
}

function TimeTableRow({title, minute}) {
    return <div className="time-table__element">
        <h2>{title}</h2>
        <h3>{minute}</h3>
    </div>
}
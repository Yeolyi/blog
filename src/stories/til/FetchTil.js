import frontmatter from "frontmatter";

export let emptyTil = {
    content: "",
    data: {
        date: Date(),
        time_table: {}
    }
}
export function tilPromise(fileName) {
    const reqMDs = require.context("../../md/til", true, /\.md$/);
    const markdownFiles = reqMDs.keys().map(path => reqMDs(path));
    return Promise.all(markdownFiles.map(file =>
        fetch(file)
            .then(response => {
                return response.text();
            })
            .then(response => {
                return frontmatter(response)
            })
            .catch(err => console.error(err))
    ))
    .then(response => {
        response.sort((a, b) => {
            return a.data.date < b.data.date ? 1 : -1;
        })
        console.log("TIL Fetched");
        return response;
    })
} 
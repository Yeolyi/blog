import frontmatter from "frontmatter";

let savedArchieve;

export let emptyAchieve = {
    content: "",
    data: {
        date: Date(),
        time_table: {}
    }
}
export function archievePromise(fileName) {
    if (savedArchieve !== undefined) {
        return Promise.resolve(savedArchieve);
    }
    const reqArchieves = require.context("../../md/archieve", true, /\.md$/);
    const markdownFiles = reqArchieves.keys().map(path => reqArchieves(path));
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
        console.log("Archieve Fetched");
        savedArchieve = response;
        return response;
    })
} 
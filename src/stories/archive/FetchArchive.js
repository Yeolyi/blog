import frontmatter from "frontmatter";

let savedArchive = undefined;

export const emptyArchive = {
    content: "",
    data: {
        title: ""
    }
}
export function archivePromise(fileName) {
    if (savedArchive !== undefined) {
        return Promise.resolve(savedArchive);
    }
    const reqArchieves = require.context("../../md/archive", true, /\.md$/);
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
        savedArchive = response;
        return response;
    })
} 
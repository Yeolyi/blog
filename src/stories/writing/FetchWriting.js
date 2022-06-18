import frontmatter from "frontmatter";

let savedWriting = undefined;

export const emptyArchive = {
    content: "",
    data: {
        title: "",
        date: Date()
    }
}
export function writingPromise() {
    if (savedWriting !== undefined) {
        return Promise.resolve(savedWriting);
    }
    const reqWriting = require.context("../../md/writing", true, /\.md$/);
    const markdownFiles = reqWriting.keys().map(path => reqWriting(path));
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
        console.log("Writing Fetched");
        const sorted = response.sort((a, b) => {
            return a.data.date > b.data.date ? -1 : 1;
        })
        savedWriting = sorted;
        return sorted;
    })
} 
import frontmatter from "frontmatter";

let savedWriting = undefined;

export const emptyWriting = {
    path: "",
    content: "",
    data: {
        title: "",
        date: new Date()
    }
}
export function writingPromise() {
    if (savedWriting !== undefined) {
        return Promise.resolve(savedWriting);
    }
    const reqWriting = require.context("../../../public/md/writing", true, /\.md$/);
    const markdownFiles = reqWriting.keys().map(path => ({path, req: reqWriting(path)}));
    return Promise.all(markdownFiles.map(file => {
        return fetch(file.req)
            .then(response => {
                return response.text();
            })
            .then(response => {
                return {...frontmatter(response), path: file.path};
            })
            .catch(err => console.error(err))
    }))
    .then(response => {
        console.log("Writing Fetched");
        const sorted = response.sort((a, b) => {
            return a.data.date > b.data.date ? -1 : 1;
        })
        savedWriting = sorted;
        return sorted;
    })
} 
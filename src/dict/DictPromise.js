import frontmatter from "frontmatter";

let savedDict = undefined;

export const emptyDict = {
    content: "",
    data: {
        title: ""
    }
}

export function dictPromise() {
    if (savedDict !== undefined) {
        return Promise.resolve(savedDict);
    }
    const reqDict = require.context("../../public/md/dict", true, /\.md$/);
    const markdownFiles = reqDict.keys().map(path => ({path, req: reqDict(path)}));
    return Promise.all(markdownFiles.map(file =>
        fetch(file.req)
            .then(response => {
                return response.text();
            })
            .then(response => {
                return {...frontmatter(response), path: file.path };
            })
            .catch(err => console.error(err))
    ))
    .then(response => {
        console.log("Dict Fetched");
        savedDict = response;
        return response;
    })
} 
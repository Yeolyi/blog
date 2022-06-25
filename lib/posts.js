import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const markdownDirectory = path.join(process.cwd(), 'markdowns');

// type: markdowns 내의 폴더명
// type/폴더명/content.md 를 읽어 YAML로 표현된 메타데이터들의 배열을 반환
// id는 폴더명과 같음
// 참고: https://nextjs.org/learn/basics/data-fetching/implement-getstaticprops
export function getSortedPostsData(type) {
  // Get file names under /posts/type
  const postsDirectory = path.join(markdownDirectory, type)
  const fileNames = fs.readdirSync(postsDirectory).filter(fileOrDirectoryName => {
    const completePath = path.join(postsDirectory, fileOrDirectoryName);
    return fs.lstatSync(completePath).isDirectory();
  })
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName, "index.md");
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    if (typeof matterResult.data.date === "object") {
      matterResult.data.date = matterResult.data.date.toISOString().slice(0, 10);
    }

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });

  // Sort posts by date
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  })
}

// Each object must have the params key and contain an object with the id key 
// (because we’re using [id] in the file name). Otherwise, getStaticPaths will fail.
export function getAllPostIds(type) {
  // Get file names under /posts/type
  const postsDirectory = path.join(markdownDirectory, type)
  const fileNames = fs.readdirSync(postsDirectory)
    .filter(fileOrDirectoryName => {
      const completePath = path.join(postsDirectory, fileOrDirectoryName);
      return fs.lstatSync(completePath).isDirectory();
    })

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName
      },
    };
  });
}

export async function getPostData(type, ...id) {
  const postsDirectory = path.join(markdownDirectory, type, ...id);
  const fullPath = path.join(postsDirectory, 'index.md');
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  let matterResult = matter(fileContents);

  if (typeof matterResult.data.date === "object") {
    matterResult.data.date = matterResult.data.date.toISOString().slice(0, 10);
  }

  const content = replaceCodeDirectives(matterResult.content, postsDirectory)

  // Use remark to convert markdown into HTML string
  // const processedContent = await remark()
  //   .use(html)
  //   .process(matterResult.content);
  // const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    content,
    ...matterResult.data,
  };
}

export function getBookmarks() {
  const bookmarkPath = path.join(process.cwd(), 'markdowns/archive/bookmark.json');
  const content = fs.readFileSync(bookmarkPath);
  return JSON.parse(content);
}

function getDictPathList(startPaths = []) {
  const postsDirectory = path.join(markdownDirectory, "dict", ...startPaths);
  const fileOrDirectoryNames = fs.readdirSync(postsDirectory);
  let paths = [];
  if (fileOrDirectoryNames.includes("index.md")) {
    paths.push(startPaths)
  }
  fileOrDirectoryNames.filter(fileOrDirectoryName => {
    const completePath = path.join(postsDirectory, fileOrDirectoryName);
    return fs.lstatSync(completePath).isDirectory();
  }).forEach(directoryName => {
    paths = paths.concat(getDictPathList([...startPaths, directoryName]));
  })
  return paths
}

export function getAllDictIDs() {
  return getDictPathList().map(path => {
    return {
      params: {
        path
      },
    };
  });
}

function replaceCodeDirectives(content, postsDirectory) {
  return content.replace(/!@([^@!]+)@!/g, (a, x) => {
    const codeFullPath = path.join(postsDirectory, x)
    const code = fs.readFileSync(codeFullPath);
    return `\`\`\`${x.split(".")[1]}\n${code}\n\`\`\``;
  })
}
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts/archive');

export function getSortedPostsData() {
  // Get file names under /posts
  const folderNames = fs.readdirSync(postsDirectory).filter(dirent => {
    const path2 = path.join(postsDirectory, dirent);
    var stat = fs.lstatSync(path2);
    return stat.isDirectory();
  });
  const allPostsData = folderNames.map((folderName) => {
    const markdownFileName = "content.md"
    const markdownDirectory = path.join(postsDirectory, folderName)
    // Remove ".md" from file name to get id
    const id = folderName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(markdownDirectory, markdownFileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

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
  });
}
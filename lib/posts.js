// import fs from 'fs';
// import path from 'path';
// import matter from 'gray-matter';

// const postsDirectory = path.join(process.cwd(), 'posts');

// export function getSortedPostsData() {
//   const fileNames = fs.readdirSync(postsDirectory);
//   const allPostsData = fileNames.map((fileName) => {
//     const id = fileName.replace(/\.md$/, '');
//     const filePath = path.join(postsDirectory, fileName);
//     const fileContents = fs.readFileSync(filePath, 'utf8');
//     const matterResult = matter(fileContents);

//     return {
//       id,
//       ...matterResult.data,
//     }
//   })

//   return allPostsData.sort(({ data: a }, { data: b }) => {
//     if ( a < b ){
//       return 1;
//     } else if (a > b) {
//       return -1;
//     } else {
//       return 0;
//     }
//   })
// }

export async function getSortedPostsData() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  const res = await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population");

  return await res.json();
}

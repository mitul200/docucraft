import fs from "fs";
import path from "path";
import matter from "gray-matter";
const postDirectory = path.join(process.cwd(), "docs");

export function getDocument() {
  console.log("filename ", postDirectory);
  const fileName = fs.readdirSync(postDirectory);

  const allDocuments = fileName.map((fileName) => {
    const id = fileName.replace(".md", "");
    const fullpath = path.join(postDirectory, fileName);
    const fileContents = fs.readFileSync(fullpath, "utf8");
    const matterResult = matter(fileContents);
    console.log(matterResult);
    return {
      id,
      ...matterResult.data,
    };
  });
  return allDocuments.sort((a, b) => {
    if (a.order < b.order) {
      return -1;
    }
    if (a.order > b.order) {
      return 1;
    }
    return 0;
  });
}

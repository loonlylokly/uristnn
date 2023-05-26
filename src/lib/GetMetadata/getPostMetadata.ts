import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "@/../types/PostMetadata";

export const getPostMetadata = (path: string): PostMetadata[] => {
  const markdownPost = fs.readdirSync(path).filter((file) => file.endsWith('.md'));
  const posts = markdownPost.map((fileName) => {
    console.log(fileName);
    const fileContents = fs.readFileSync(`./posts/${fileName}`, 'utf-8');
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      description: matterResult.data.description,
      tags: matterResult.data.tags.split(' '),
      date: matterResult.data.date,
      url: fileName.replace(".md", ""),
    };
  });

  return posts;
};

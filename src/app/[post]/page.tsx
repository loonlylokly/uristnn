import fs from "fs";
import matter from "gray-matter";
import Title from '@/modules/Article/Title/Title';
import More from '@/modules/Article/More/More';
import Article from '@/modules/Article/Text/Text';
import styles from './page.module.css';
import Toc from "@/modules/Toc/Toc";

const getPostContent = (url: string) => {
  let content = '';
  if (fs.existsSync(`./posts/${url}.md`)) {
    content = fs.readFileSync(`./posts/${url}.md`, 'utf-8');
  } else {
    content = fs.readFileSync(`./posts/not-found.md`, 'utf-8');
  }
  const post = matter(content);
  return post;
}

const Post = (props: any) => {
  const post = getPostContent(props.params.post);
  return (
    <>
      <Title title={post.data}/>
      <main className={styles.article}>
        <div className={styles.content}>
          <Toc toc={post.data.toc} toc_link={post.data.toc_link} url={props.params.post}/>
          <Article content={post.content}/>
        </div>
        <More />
      </main>
    </>
  );
}

export default Post;
import Link from 'next/link';
import List from '@/components/Lists/List/List';
import PostCard from '@/components/Cards/PostCard/PostCard';
import styles from './page.module.css';
import { PostMetadata } from '@/../types/PostMetadata';
import Breadcrumbs from '@/modules/Breadcrumbs/Breadcrumbs';
import { getPostMetadata } from '@/lib/GetMetadata/getPostMetadata';

export default function Posts() {
  const postsMetadata = getPostMetadata('./posts');

  return (
    <>
      <Breadcrumbs
        prevsLink={{}}
        prevsName={[]}
        current="Статьи"
      />
      <h1 className={styles.title}>Статьи</h1>
      <section className={styles.list}>
        <List
          classNameList={styles.cards__list}
          items={postsMetadata}
          renderItem={(card: PostMetadata) => (
            <PostCard key={card.url} card={card} />
          )}
        />
      </section>
    </>
  );
}
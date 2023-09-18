import { Metadata } from 'next';
import List from '@/components/Lists/List/List';
import PostCard from '@/components/Cards/PostCard/PostCard';
import Breadcrumbs from '@/modules/Breadcrumbs/Breadcrumbs';
import { PostMetadata } from '@/../types/PostMetadata';
import { getPostMetadata } from '@/lib/GetMetadata/getPostMetadata';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Статьи «Статский Советник» Юридическое агенство',
  description: 'Юридическая помощь в Нижнем Новгороде быстро и профессионально. Юристы с опытом от 10 лет. Срочная помощь. Контактная информация, адрес, электронная почта. Звоните нам по номеру ☎ +7 (831) 4…',
}

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
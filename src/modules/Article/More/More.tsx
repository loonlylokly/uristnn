import Link from 'next/link';
import styles from './More.module.css';

export default function More() {
  return (
    <aside className={styles.aside}>
      <div className={styles.more}>
        <h2 className={styles.more__title}>Больше статей</h2>
        <Link className={styles.more__link} href="/">Смотреть всё</Link>
      </div>
      {/* <List
        classNameList={styles.cards__list}
        items={data || []}
        renderItem={(card: PostCardType) => (
          <PostCard key={card.id} postCard={card} />
        )}
      /> */}
    </aside>
  );
}
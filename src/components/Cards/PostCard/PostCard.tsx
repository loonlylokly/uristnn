import { FC } from 'react';
import Link from 'next/link';
import { PostMetadata } from '@/../types/PostMetadata';
import styles from './PostCard.module.css';

type Props = {
  card: PostMetadata;
};

const PostCard: FC<Props> = ({card}) => {
  return (
    <Link className={styles.card} href={card.url}>
      <div className={styles.header}>
        <h3 className={styles.title}>{card.title}</h3>
      </div>
      <p className={styles.text}>{card.description}</p>
      <p className={styles.date}>{card.date.toString()}</p>
    </Link>
  );
};

export default PostCard;

import { FC } from 'react';
import Link from 'next/link';
import styles from './Title.module.css';

type Props = {
  [key: string]: any;
};

const Title: FC<Props> = ({title}) => {
  const tags = title.tags.split(" ");
  return (
    <div className={styles.wrapper}>
      <section className={styles.header}>
        <div className={styles.breadcrumbs}>
          <Link href="/">Главная</Link>
          <span> / </span>
          <span>{title.title}</span>
        </div>
        {/* <div className={styles.tags}>
          {tags[0] !== '' && tags.map((tag: any) => (<span key={tag} className={styles.tag}>{tag}</span>))}
        </div> */}
        <h1 className={styles.title}>{title.title}</h1>
        <time className={styles.date} dateTime="2017-06-13">{title.date}</time>
      </section>
    </div>
  );
}

export default Title;

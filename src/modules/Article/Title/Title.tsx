import { FC } from 'react';
import styles from './Title.module.css';
import Breadcrumbs from '@/modules/Breadcrumbs/Breadcrumbs';

type Props = {
  [key: string]: any;
};

const Title: FC<Props> = ({title}) => {
  const tags = title.tags.split(" ");
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Breadcrumbs
          prevsLink={{'Статьи':'/posts'}}
          prevsName={['Статьи']}
          current={title.title}
        />
        {/* <div className={styles.tags}>
          {tags[0] !== '' && tags.map((tag: any) => (<span key={tag} className={styles.tag}>{tag}</span>))}
        </div> */}
        <section>
          <h1 className={styles.title}>{title.title}</h1>
          <time className={styles.date} dateTime="2017-06-13">{title.date}</time>
        </section>
      </div>
    </div>
  );
}

export default Title;

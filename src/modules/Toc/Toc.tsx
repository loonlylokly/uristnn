import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Toc.module.css';

type Props = {
  toc: string;
  toc_link: string;
  url: string;
};

const Toc: FC<Props> = ({toc, toc_link, url}) => {
  const tocArr = toc.split(", ");
  const toc_linkArr = toc_link.split(", ");
  return (
    <details className={styles.toc}>
      <summary className={styles.toc__summary}>
        <Image 
          src='/icons/toc.svg'
          alt='Содержание'
          width={24}
          height={24}
        />
        <span className={styles.title}>Содержание</span><span className={styles.arrow}>▶</span>
      </summary>
      <ol className={styles.toc__list}>
        {tocArr[0] !== "" && tocArr.map((subtitle, index) => (
          <li key={subtitle}>
            <Link href={`/${url}${toc_linkArr.length >= index && toc_linkArr[index]}`}>{subtitle}</Link>
          </li>
        ))}
      </ol>
    </details>
  )
}

export default Toc;

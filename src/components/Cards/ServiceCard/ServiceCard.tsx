import { FC } from 'react';
import Image from "next/image";
import styles from './ServiceCard.module.css';
import Link from 'next/link';
import { ServiceCard } from '@/../types/ServiceCard';

type Props = {
  card: ServiceCard;
}

const Card: FC<Props> = ({card}) => {
  return (
    <Link className={styles.card} href={card.url}>
      <div className={styles.header}>
        <Image
          src={`${card.icon}`}
          alt='logo'
          width={48}
          height={48}
          className={styles.icon}
          />
        <h3 className={styles.title}>{card.title}</h3>
      </div>
      <p className={styles.text}>{card.description}</p>
      <p className={styles.price}>{card.priceFrom}</p>
    </Link>
  );
};

export default Card;

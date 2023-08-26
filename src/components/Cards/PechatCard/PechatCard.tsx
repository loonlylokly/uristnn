import { FC } from 'react';
import Image from "next/image";
import styles from './PechatCard.module.css';
import { PechatCard } from '@/../types/PechatCard';

type Props = {
  card: PechatCard;
}

const Card: FC<Props> = ({card}) => {
  return (
    <div className={styles.item}>
      <Image
        src={card.image}
        alt={card.name}
        width={164}
        height={100}
        loading='lazy'
        className={styles.image}
      />
      <h3 className={styles.name}>{card.name}</h3>
      <p className={styles.price}>{card.price}</p>
    </div>
  );
};

export default Card;

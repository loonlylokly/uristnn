import Link from "next/link";
import Image from "next/image";
import { Cormorant_Infant, Playfair_Display } from "next/font/google";
import styles from "./Logo.module.css";

const cormorant_infant = Cormorant_Infant({
  subsets: ['cyrillic'],
  weight: "700",
  variable: '--font-cormorant',
  display: 'swap',
});

const playfair_display_SC = Playfair_Display({
  subsets: ['cyrillic'],
  weight: "500",
  variable: '--font-playfair-display',
  display: 'swap',
});

const PhoneIcon = ({
  src,
  width,
  height,
  myClassName,
}: {
  src: string
  width: number
  height: number
  myClassName: string
}) => {
  return (
    <Link className={`${styles.logo} ${myClassName}`} href="/" aria-label="Статский Советник">
      <Image
        src={src}
        alt='Логотип компании Статский Советник'
        width={width}
        height={height}
        className={styles.image}
        itemProp="image"
      />
      <span className={styles.text__wrapper} itemProp="name">
        <p className={`${styles.text} ${cormorant_infant.variable} ${playfair_display_SC.variable}`}>&nbsp;<span className={styles.letter__big}>С</span><span className={styles.letter__t}>т</span>a<span className={styles.letter__t}>т</span>ский</p>
        <p className={`${styles.text} ${cormorant_infant.variable} ${playfair_display_SC.variable}`}><span className={styles.letter__big}>С</span>ове<span className={styles.letter__t}>т</span>ник</p>
      </span>
    </Link>
  );
}

export default PhoneIcon;
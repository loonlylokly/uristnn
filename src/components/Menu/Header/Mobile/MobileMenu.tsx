import Link from "next/link";
import { FC } from "react";
import styles from "./MobileMenu.module.css";

type Props = {
  myClassName: string;
};

const MobileMenu: FC<Props> = ({myClassName}) => {
  return (
    <nav className={`${styles.menu} ${myClassName}`} aria-label="Основное">
      <ul className={styles.menu__list}>
        <li className={styles.menu__item}>
          <Link className={styles.menu__link} href="/">Главная</Link>
        </li>
        <li className={styles.menu__item}>
          <Link className={styles.menu__link} href="/services">Услуги</Link>
        </li>
        <li className={styles.menu__item}>
          <Link className={styles.menu__link} href="/contacts">Контакты</Link>
        </li>
      </ul>
      <a className={`${styles.btn__phone} btn btnSecondary`} href="tel:+78314133224">+7 831 413-32-24</a>
      <Link className={`${styles.btn__konsult} btn btnPrimary`} href="files/price.pdf" target="_blank">Прайс-лист</Link>
    </nav>
  );
}

export default MobileMenu;

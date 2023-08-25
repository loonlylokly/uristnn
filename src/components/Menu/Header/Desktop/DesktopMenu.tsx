import Link from "next/link";
import styles from "./DesktopMenu.module.css";

const DesktopMenu = () => {
  return (
    <nav className={styles.menu} aria-label="Основное">
      <ul className={styles.menu__list}>
        <li className={styles.menu__item}>
          <Link className={styles.menu__link} href="/">Главная</Link>
        </li>
        <li className={styles.menu__item}>
          <Link className={styles.menu__link} href="/services">Услуги</Link>
        </li>
        <li className={styles.menu__item}>
          <Link className={styles.menu__link} href="/posts">Статьи</Link>
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

export default DesktopMenu;
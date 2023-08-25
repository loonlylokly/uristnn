import Link from "next/link";
import styles from "./LawerServices.module.css";

const LawerServices = () => {
  return (
    <ul className={styles.services}>
      <li><Link className={styles.item} href="/yuridicheskaya-konsultatsiya">Консультация для предпринимателей</Link></li>
      <li><Link className={styles.item} href="/predstavitelstvo-v-sude">Ведение дел в суде</Link></li>
      <li><Link className={styles.item} href="/registratsiya-ooo">Регистрация юридических лиц</Link></li>
      <li><Link className={styles.item} href="/likvidatsiya-ooo">Ликвидация юридических лиц</Link></li>
      <li><Link className={styles.item} href="/sostavleniye-dogovora">Составление договоров / Экспертиза документов</Link></li>
    </ul>
  );
}

export default LawerServices;

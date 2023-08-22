import Link from "next/link";
import styles from "./LawerServices.module.css";

const LawerServices = () => {
  return (
    <ul className={styles.services}>
      <li><Link href="/yuridicheskaya-konsultatsiya">Консультация для предпринимателей</Link></li>
      <li><Link href="/predstavitelstvo-v-sude">Ведение дел в суде</Link></li>
      <li><Link href="/registratsiya-ooo">Регистрация юридических лиц</Link></li>
      <li><Link href="/likvidatsiya-ooo">Ликвидация юридических лиц</Link></li>
      <li><Link href="/sostavleniye-dogovora">Составление договоров / Экспертиза документов</Link></li>
    </ul>
  );
}

export default LawerServices;

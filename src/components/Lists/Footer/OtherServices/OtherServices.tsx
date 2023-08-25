import Link from "next/link";
import styles from "./OtherServices.module.css";

const OtherServices = () => {
  return (
    <ul className={styles.services}>
      <li><Link className={styles.item} href="/vedeniye-bukhgalterii">Консультация бухгалтера</Link></li>
      <li><Link className={styles.item} href="/sdacha-nalogovoy-otchetnosti">Сдача налоговой отчетности</Link></li>
      <li><Link className={styles.item} href="/pechati">Круглые печати</Link></li>
      <li><Link className={styles.item} href="/stamp">Штампы</Link></li>
      <li><Link className={styles.item} href="/vedeniye-bukhgalterii">Ведение бухгалтера</Link></li>
    </ul>
  );
}

export default OtherServices;

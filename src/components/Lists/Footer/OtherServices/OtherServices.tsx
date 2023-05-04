import Link from "next/link";
import styles from "./OtherServices.module.css";

const OtherServices = () => {
  return (
    <ul className={styles.services}>
      <li><Link href="">Консультация бухгалтера</Link></li>
      <li><Link href="/sdacha-nalogovoy-otchetnosti">Сдача налоговой отчетности</Link></li>
      <li><Link href="/pechati">Круглые печати</Link></li>
      <li><Link href="/stamp">Штампы</Link></li>
      <li><Link href="/vedeniye-bukhgalterii">Ведение бухгалтера</Link></li>
    </ul>
  );
}

export default OtherServices;

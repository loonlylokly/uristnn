import Link from "next/link";
import AddressIcon from "@/components/Icons/Address/AddressIcon";
import EmailIcon from "@/components/Icons/Email/EmailIcon";
import PhoneIcon from "@/components/Icons/Phone/PhoneIcon";
import TimeIcon from "@/components/Icons/Time/TimeIcon";
import styles from "./Contacts.module.css";

const Contacts = () => {
  return (
    <ul className={styles.contacts__list}>
      <li className={styles.contacts__item}>
        <div className={styles.contacts__link}>
          <TimeIcon />
          <time itemProp="openingHours" dateTime="Mo-Fr 9:00−17:00">Пн – Пт с 09:00 до 17:00</time>
        </div>
      </li>
      <li className={styles.contacts__item}>
        <a className={styles.contacts__link} href="tel:+78314133224">
          <PhoneIcon size={32}/>
          <p itemProp="telephone">+7 (831) 4 133 224</p>
        </a>
      </li>
      <li className={styles.contacts__item}>
        <Link className={styles.contacts__link} href="mailto:uristnn.ru@yandex.ru">
          <EmailIcon size={32}/>
          <p itemProp="email">uristnn.ru@yandex.ru</p>
        </Link>
      </li>
      <li className={styles.contacts__item}>
        <Link className={styles.contacts__link} href="/contacts">
          <AddressIcon size={32}/>
          <span itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
            <span itemProp="postalCode">603002,&ensp;</span>
            <span itemProp="addressLocality">Нижний Новгород,&ensp;</span>
            <span itemProp="streetAddress">ул.Литвинова, д.74Б, 5 этаж, офис 501</span>
          </span>
        </Link>
      </li>
    </ul>
  );
}

export default Contacts;

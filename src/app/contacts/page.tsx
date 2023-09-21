import { Metadata } from 'next';
import Breadcrumbs from '@/modules/Breadcrumbs/Breadcrumbs';
import styles from './page.module.css'
import AddressPath from '@/modules/AddressPath/AddressPath';

export const metadata: Metadata = {
  title: 'Контакты «Статский Советник» Юридическое агенство',
  description: 'Юридическая помощь в Нижнем Новгороде быстро и профессионально. Юристы с опытом от 10 лет. Срочная помощь. Контактная информация, адрес, электронная почта. Звоните нам по номеру ☎ +7 (831) 4…',
}

export default function Contacts() {
  return (
    <>
      <Breadcrumbs
        prevsLink={{}}
        prevsName={[]}
        current="Контакты"
      />
      <section className={styles.contacts}>
        <h1 className={styles.title}>Контакты</h1>
        <ul className={styles.list}>
          <li className={styles.contact}>
            <h3 className={styles.contact__title}>Телефон</h3>
            <a className={styles.contact__link} href="tel:+78314133224">+7 (831) 4 133 224</a>
          </li>
          <li className={styles.contact}>
            <h3 className={styles.contact__title}>Почта</h3>
            <a className={styles.contact__link} href="mailto:uristnn.ru@yandex.ru">uristnn.ru@yandex.ru</a>
          </li>
          <li className={`${styles.contact} ${styles.contact__address}`}>
            <h3 className={styles.contact__title}>Адрес</h3>
            <a className={styles.contact__link} href="https://yandex.by/maps/-/CHbfVrR" target="_blank">603002, Нижний Новгород, ул.Литвинова, д.74Б, 5 этаж, офис 501</a>
          </li>
          <li className={styles.contact}>
            <h3 className={styles.contact__title}>Время работы</h3>
            <p className={styles.contact__link}>Пн – Пт с 09:00 до 17:00</p>
          </li>
        </ul>
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A742874dccc9a71afd2d7020987f37d97addb1afaa59445b48a6345ab530f18b9&amp;source=constructor" width="100%" height="450" frameBorder="0"></iframe>
      </section>
      <AddressPath />
    </>
  )
}

import Link from "next/link";
import ServicesLists from "@/components/Lists/Services/ServicesLists";
import Categories from "@/components/Lists/Categories/Сategories";
import styles from "./ListServices.module.css";

export default function Services() {
  return (
    <section className={styles.services}>
      <div className={styles.header}>
        <h2 className={styles.title}>Наши услуги</h2>
        <Link className={styles.link} href="/">Смотреть всё</Link>
      </div>
      <Categories />
      <ServicesLists />
    </section>
  )
}
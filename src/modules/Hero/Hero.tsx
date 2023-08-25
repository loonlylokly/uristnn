import BtnOpenPopUp from "@/components/Buttons/OpenPopUp/BtnOpenPopUp";
import CheckmarkIcon from "@/components/Icons/CheckmarkIcon/CheckmarkIcon";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.textblock}>
        <h1 className={styles.title}>Защитите свои права</h1>
        {/* <p className={styles.text}>Мы команда опытных юристов, готовых помочь вам с самыми сложными правовыми вопросами. Мы предлагаем широкий спектр юридических услуг, начиная от консультаций и разработки документов, заканчивая представительством в суде. Мы полностью осознаем, что каждая ситуация уникальна, поэтому разрабатываем индивидуальные стратегии для защиты ваших прав и интересов.</p> */}
        <p className={styles.text}>АЮУ &ldquo;Статский Советник&rdquo;, готово помочь вам с самыми сложными правовыми вопросами. Каждый юридический кейс уникален, поэтому требует индивидуальной стратегии для защиты ваших прав и интересов.</p>
        <p className={`${styles.text} ${styles.subtext}`}>Мы предлагаем широкий спектр юридических услуг, начиная от консультаций и разработки документов, заканчивая представительством в суде.</p>
        <div className={styles.list__benefits}>
          <div className={styles.benefit}>
            <CheckmarkIcon size={24} /><p>Юридическая и бухгалтерская поддержка</p>
          </div>
          <div className={styles.benefit}>
            <CheckmarkIcon size={24} /><p>Срочная онлайн-консультация</p>
          </div>
          <div className={styles.benefit}>
            <CheckmarkIcon size={24} /><p>Представительство ваших интересов в суде</p>
          </div>
        </div>
        <BtnOpenPopUp type={"btnPrimary"} myClassName={styles.btn__cta}>Консультация</BtnOpenPopUp>
      </div>
      <div className={styles.imageblock}>
        <Image
          src='/images/vesy.webp'
          alt='logo'
          width={480}
          height={480}
          loading = 'eager'
          className={styles.image}
        />
      </div>
    </section>
  )
}
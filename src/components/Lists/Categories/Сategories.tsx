"use client"

import styles from "@/modules/ListServices/ListServices.module.css";

export default function Categories() {
  return (
    <div className={styles.category}>
      <button className={`${styles.btn__switch} switcher`}></button>
      <button className={`${styles.btn__switch} switcher`}></button>
      <button className={`${styles.btn__switch} switcher`}></button>
      <button className={`${styles.btn__switch} switcher`}></button>
      <button className={`${styles.btn__switch} switcher`}></button>
    </div>
  )
}

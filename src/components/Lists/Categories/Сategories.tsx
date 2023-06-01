"use client"

import { MouseEventHandler } from "react";
import { useListServices } from "@/store";
import styles from "@/modules/ListServices/ListServices.module.css";

export default function Categories() {
  const category = useListServices((state) => state.category);
  const setCategory = useListServices((state) => state.setCategory);
  const changeCards: MouseEventHandler<HTMLButtonElement> = (event) => {
    const label = event.currentTarget.attributes[1].nodeValue;
    if (label === 'registr' || label === 'likvid'|| label === 'yuriduslugi' ||
        label === 'pechati' || label === 'buhuslugi') {
      setCategory(label);
    }
  };
  
  return (
    <div className={styles.category} aria-label={category}>
      <button className={`${styles.btn__switch} switcher ${category === 'registr' && 'switch__on'}`} aria-label="registr" onClick={changeCards}> </button>
      <button className={`${styles.btn__switch} switcher ${category === 'likvid' && 'switch__on'}`} aria-label="likvid" onClick={changeCards}> </button>
      <button className={`${styles.btn__switch} switcher ${category === 'yuriduslugi' && 'switch__on'}`} aria-label="yuriduslugi" onClick={changeCards}> </button>
      <button className={`${styles.btn__switch} switcher ${category === 'pechati' && 'switch__on'}`} aria-label="pechati" onClick={changeCards}> </button>
      <button className={`${styles.btn__switch} switcher ${category === 'buhuslugi' && 'switch__on'}`} aria-label="buhuslugi" onClick={changeCards}> </button>
    </div>
  )
}

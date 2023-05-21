"use client"

import { usePopUp } from "@/store";
import { FC } from "react";
import styles from "./PopUp.module.css";

type Props = {
  title: string;
  children: React.ReactNode;
};

const PopUp: FC<Props> = ({title, children}) => {
  const popup = usePopUp((state) => state.popup);
  const togglePopUp = usePopUp((state) => state.togglePopUp);

  if (!popup) {
    return (<></>);
  }

  return (
    <>
      <div className={styles.popup}>
        <div className={styles.popup__background} onClick={togglePopUp}></div>
        <div className={styles.popup__wrapper}>
          <div className={styles.btn__wrapper}>
            <button className={styles.btn__close} onClick={togglePopUp}>x</button>
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>{title}</h2>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default PopUp;

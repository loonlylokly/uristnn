import { FC } from "react";
import Image from "next/image"
import styles from "./HeroService.module.css";
import BtnOpenPopUp from "@/components/Buttons/OpenPopUp/BtnOpenPopUp";

type Props = {
  props: {
    title: string;
    subtitle: string;
    description: string;
    price: string;
    ctaTextBtn: string;
    image: string;
  }
};

const HeroService: FC<Props> = ({props}) => {
  return (
    <section className={styles.hero} itemScope itemType="http://schema.org/ImageObject">
      <div className={styles.imageblock}>
        <Image
          src={props.image}
          alt='иконка услуги'
          width={200}
          height={200}
          className={styles.image}
          itemProp="contentUrl"
        />
      </div>
      <div className={styles.textblock}>
        <h1 className={styles.title} itemProp="name">{props.title}</h1>
        <p className={styles.description} itemProp="description">{props.description}</p>
        <p className={styles.price}>{props.price}</p>
        <BtnOpenPopUp myClassName={styles.btn__cta} type="btnPrimary">{props.ctaTextBtn}</BtnOpenPopUp>
      </div>
    </section>
  )
}

export default HeroService;

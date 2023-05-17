import { FC } from "react";
import Card from "@/components/Cards/PechatCard/PechatCard";
import List from "@/components/Lists/List/List";
import styles from "./Catalog.module.css";
import { pechati } from "@/../data/Pechati/pechati";
import { PechatCard } from "@/../types/PechatCard";

type Props = {
  title: string;
};

const Catalog: FC<Props> = ({ title }) => {
  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      <List
        classNameList={styles.catalog}
        items={pechati || []}
        renderItem={(card: PechatCard) => (
          <Card key={card.id} card={card} />
        )}
      />
    </section>
  )
}

export default Catalog;

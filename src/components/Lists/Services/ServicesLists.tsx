"use client"

import Card from "@/components/Cards/ServiceCard/ServiceCard";
import List from "../List/List";
import { registr, likvid, yuriduslugi, pechati, buhuslugi } from "@/../data/Services/ShortInfo"
import { ServiceCard } from "@/../types/ServiceCard";
import styles from "@/modules/ListServices/ListServices.module.css";

const ServicesLists = () => {
  const lists = [registr, likvid, yuriduslugi, pechati, buhuslugi];
  
  return (
    <div className={styles.lists}>
      {lists.map((list, index) => (
        <List
          key={index}
          classNameList={styles.cards__list}
          items={list || []}
          renderItem={(card: ServiceCard) => (
            <Card key={card.url} card={card} />
          )}
        />
      ))}
    </div>
  );
}

export default ServicesLists;

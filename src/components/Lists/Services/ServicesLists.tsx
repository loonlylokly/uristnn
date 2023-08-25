"use client"

import Card from "@/components/Cards/ServiceCard/ServiceCard";
import List from "../List/List";
import { registr, likvid, yuriduslugi, pechati, buhuslugi } from "@/../data/Services/ShortInfo"
import styles from "@/modules/ListServices/ListServices.module.css";
import { useListServices } from "@/store";
import { ServicesCategory } from "@/../types/ServicesCategory";
import { ServiceCard } from "@/../types/ServiceCard";

const ServicesLists = () => {
  const lists = [registr, likvid, yuriduslugi, pechati, buhuslugi];
  const category = useListServices((state) => state.category);

  const getHeight = (category: ServicesCategory) => {
    const heights = {
      "registr": { 'mobile': '880px', 'miniTablet': '680px', 'tablet': '480px' },
      "likvid": { 'mobile': '540px', 'miniTablet': '430px', 'tablet': '240px' },
      "yuriduslugi": { 'mobile': '840px', 'miniTablet': '560px', 'tablet': '400px' },
      "pechati": { 'mobile': '540px', 'miniTablet': '400px', 'tablet': '240px' },
      "buhuslugi": { 'mobile': '400px', 'miniTablet': '240px', 'tablet': '240px' },
    }
    
    if (typeof window !== "undefined") {
      const mobile = window.matchMedia('(min-width: 320px)');
      const miniTablet = window.matchMedia('(min-width: 580px)');
      const tablet = window.matchMedia('(min-width: 890px)');

      if (tablet.matches) return heights[category]['tablet'];
      if (miniTablet.matches) return heights[category]['miniTablet'];
      if (mobile.matches) return heights[category]['mobile'];
    }
  }

  return (
    <div className={styles.lists} style={{height: getHeight(category)}}>
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

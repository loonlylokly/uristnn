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
      "registr": { 'mobile': '1000px', 'miniTablet': '890px', 'tablet': '420px' },
      "likvid": { 'mobile': '660px', 'miniTablet': '460px', 'tablet': '240px' },
      "yuriduslugi": { 'mobile': '980px', 'miniTablet': '660px', 'tablet': '400px' },
      "pechati": { 'mobile': '600px', 'miniTablet': '440px', 'tablet': '240px' },
      "buhuslugi": { 'mobile': '430px', 'miniTablet': '260px', 'tablet': '260px' },
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

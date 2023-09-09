import Link from "next/link";
import styles from "./Breadcrumbs.module.css";
import { FC } from "react";

type Props = {
  prevsLink: Record<string, string>;
  prevsName: string[];
  current: string;
};

const Breadcrumbs: FC<Props> = ({prevsLink, prevsName, current}) => {
  return (
    <section className={styles.breadcrumbs}>
      <ul className={styles.list} itemScope itemType="https://schema.org/BreadcrumbList">
        <li className={styles.item} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <Link href="https://uristnn.ru" title="Главная" itemProp="item">
            <span itemProp="name">Главная</span>
            <meta itemProp="position" content="1" />
            {/* <meta itemProp="item" content="Главная" /> */}
          </Link>
        </li>
        {prevsName.map((item, index) => 
          <li key={item}  className={styles.item} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span className={styles.item}>&nbsp;»&nbsp;</span>
            <Link href={`https://uristnn.ru${prevsLink[item]}`} itemProp="item" itemID={`https://uristnn.ru${prevsLink[item]}`}>
              <span itemProp="name">{item}</span>
              <meta itemProp="position" content={(index+2).toString()} />
              {/* <meta itemProp="item" content={item} /> */}
            </Link>
          </li>
        )}
        <li className={styles.item} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <span className={styles.item}>&nbsp;»&nbsp;</span>
          <span itemProp="name">{current}</span>
          <meta itemProp="position" content={(prevsName.length+2).toString()} />
          {/* <meta itemProp="item" content={current} /> */}
        </li>
      </ul>
    </section>
  )
}

export default Breadcrumbs;

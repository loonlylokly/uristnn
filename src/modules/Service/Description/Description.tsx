import { FC } from "react";
import styles from "./Description.module.css";

type Props = {
  props: {
    title?: string;
    marked?: string;
    data: (string | Record<string, string[]>)[];
  }
};

const Description: FC<Props> = ({props}) => {
  return (
    <section className={styles.description}>
      {props.title && <h2 className={styles.title}>{props.title}</h2>}
      <span className={styles.text}>
        {props.marked && <p className={styles.marked}>{props.marked}</p>}
        {props.data.map((item, index) => {
          if (typeof(item) !== "string") {
            if (item.hasOwnProperty('ordered_list')) {
              return (
                <ol key={index} className={styles.list}>
                  {item.ordered_list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
              )
            }
            if (item.hasOwnProperty('unordered_list')) {
              return (
                <ul key={index} className={styles.list}>
                  {item.unordered_list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )
            }
          }
          return (<p key={item.toString()}>{item.toString()}</p>);
        })}
      </span>
    </section>
  )
}

export default Description;

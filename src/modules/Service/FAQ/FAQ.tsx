import { FC } from "react";
import styles from "./FAQ.module.css";

type Question = {
  question: string,
  answer: (string | Record<string, string[]>)[];
}

type Props = {
  props: {
    title: string;
    questions: Question[];
  }
};

const FAQ: FC<Props> = ({props}) => {
  return (
    <section className={styles.faq} itemScope itemType="http://schema.org/FAQPage">
      <h2 className={styles.title}>{props.title}</h2>
      {props.questions.map((item) => (
        <details key={item.question} className={styles.question} itemProp="mainEntity" itemScope itemType="http://schema.org/Question">
          <summary className={styles.question__title} itemProp="name">{item.question}<span className={styles.marker}>▶</span></summary>
          <span itemScope itemProp="acceptedAnswer" itemType="http://schema.org/Answer">
            <span  itemProp="text">
            {item.answer.map((itemAnswer, index) => {
              if (typeof(itemAnswer) !== "string") {
                if (itemAnswer.hasOwnProperty('ordered_list')) {
                  return (
                    <ul key={index} className={styles.list}>
                      {itemAnswer.ordered_list.map((item, index) => (
                        <li key={index}>{item}</li>
                        ))}
                    </ul>
                  )
                }
                if (itemAnswer.hasOwnProperty('unordered_list')) {
                  return (
                    <ol key={index} className={styles.list}>
                      {itemAnswer.unordered_list.map((item, index) => (
                        <li key={index}>{item}</li>
                        ))}
                    </ol>
                  )
                }
              }
              return (<p key={itemAnswer.toString()} className={styles.answer}>{itemAnswer.toString()}</p>);
            })}
            </span>
          </span>
        </details>
      ))}
    </section>
  )
}

export default FAQ;

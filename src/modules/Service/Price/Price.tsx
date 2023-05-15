import { FC } from "react";
import styles from "./Price.module.css";

type Section = {
  nameSection: string;
  value: string;
};

type Props = {
  services: Section[];
  additional: Section[];
  times: Section[];
};

const Price: FC<Props> = ({services, additional, times}) => {
  return (
    <section className={styles.section}>
      {services.length !== 0 &&
      <table>
        <thead>
          <tr>
            <th>Наименование услуги</th>
            <th>Цена</th>
          </tr>
        </thead>
        <tbody>
          {services.map((item) => (
            <tr key={item.nameSection}>
              <td>{item.nameSection}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>}
      {additional.length !== 0 && 
      <table>
        <thead>
          <tr>
            <th>Дополнительные расходы</th>
            <th>Цена</th>
          </tr>
        </thead>
        <tbody>
          {additional.map((item) => (
            <tr key={item.nameSection}>
              <td>{item.nameSection}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>}
      {times.length !== 0 && 
      <table>
        <thead>
          <tr>
            <th>Наименование услуги</th>
            <th>Сроки</th>
          </tr>
        </thead>
        <tbody>
          {times.map((item) => (
            <tr key={item.nameSection}>
              <td>{item.nameSection}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>}
    </section>
  )
}

export default Price;

import Image from "next/image";
import styles from "./AddressPath.module.css"

export default function AddressPath() {
  return (
    <section>
      <div className={styles.schema}>
        <h2>Схема проезда</h2>
        <Image src="/images/contacts/shema.jpg" width="0" height="0" sizes="100vw" alt="Схема проезда"/>
      </div>
      <p>На схеме цифрами <strong>1,2,3</strong> обозначены входы в здание.</p>
      <p><strong>Проезд на авто со стороны Московского вокзала:</strong> с пл. Революции по ул. Чкалова почти сразу свернуть на ул. Прокофьева и сразу на ул. Долгополова (это улица параллельная Литвинова, односторонняя в направлении пр. Ленина), далее свернуть на ул. Приокскую. Проезжаете прямо перекресток с ул. Литвинова. Справа будет 9 этажное здание - Литвинова 74Б. Через 160 м справа будет въезд на парковку Центральной строительной галереи. Вы на месте.</p>
      <br/>
      <p><strong>Проезд на авто со стороны пр. Ленина:</strong> от Управления РЖД по ул. Июльских дней, после ж/д переезда попадаете на ул. Литвинова. Справа увидите 9 этажное здание - Литвинова 74Б. Поворачиваете направо на ул. Приокскую. Через 160 м справа будет въезд на парковку Центральной строительной галереи. Вы на месте.</p>
      <br/>
      <p><strong>Проезд общественным транспортом:</strong> От станции метро &quot;Московская&quot; 550 м пешком по ул. Литвинова<br/>Если вы едите со стороны пр. Ленина остановка &quot;Дом торговли&quot; <a href="#" id="link_marshrut1">№ маршрутов</a><br/>Если вы едите со стороны Московского вокзала остановка &quot;ул. Долгополова&quot; (или &quot;Канавинский рынок&quot;) <a href="#" id="link_marshrut2">№ маршрутов</a></p>
      <div className={styles.number}>
        <Image src="/images/contacts/1.png" width="40" height="40" alt=" "/>
        <h2>Вход со стороны остановки к лестнице.</h2>
      </div>
      <div>
        <ul className={styles.list}>
          <li><Image src="/images/contacts/EntersStreet.jpg" width="0" height="0" sizes="100vw" alt="" /></li>
          <li><Image src="/images/contacts/EnterStreetLadder1.jpg" width="0" height="0" sizes="100vw" alt="" /></li>
          <li><Image src="/images/contacts/EnterStreetLadder2.jpg" width="0" height="0" sizes="100vw" alt="" /></li>
          <li><Image src="/images/contacts/EnterStreetLadder3.jpg" width="0" height="0" sizes="100vw" alt="" /></li>
        </ul>
      </div>	
      <div className={styles.number}>
        <Image src="/images/contacts/2.png" width="40" height="40" alt=" "/>
        <h2>Вход со стороны остановки к лифтам через 1 этаж торгового зала.</h2>
      </div>
      <div>
        <ul className={styles.list}>
          <li id="slidel1"><Image src="/images/contacts/EntersStreet.jpg" width="0" height="0" sizes="100vw" alt="" /></li>
          <li id="slidel2"><Image src="/images/contacts/EnterStreet1.jpg" width="0" height="0" sizes="100vw" alt="" /></li>
          <li id="slidel3"><Image src="/images/contacts/EnterStreet2.jpg" width="0" height="0" sizes="100vw" alt="" /></li>
          <li id="slidel4"><Image src="/images/contacts/EnterStreet3.jpg" width="0" height="0" sizes="100vw" alt="" /></li>
          <li id="slidel5"><Image src="/images/contacts/EnterStreetParking3.jpg" width="0" height="0" sizes="100vw" alt="" /></li>
          <li id="slidel6"><Image src="/images/contacts/EnterStreetParking4.jpg" width="0" height="0" sizes="100vw" alt="" /></li>
          <li id="slidel7"><Image src="/images/contacts/EnterStreetParking5.jpg" width="0" height="0" sizes="100vw" alt="" /></li>
          <li id="slidel8"><Image src="/images/contacts/EnterStreetParking6.jpg" width="0" height="0" sizes="100vw" alt="" /></li>
        </ul>
      </div>

      <div className={styles.number}>
        <Image src="/images/contacts/3.png" width="40" height="40" alt=" "/>
        <h2>Вход со стороны парковки к лифтам через 1 этаж торгового зала.</h2>
      </div>

      <div>
        <ul className={styles.list}>
          <li id="slidee1"><Image src="/images/contacts/EnterParking1.jpg" width="0" height="0" sizes="100vw" alt=" "/></li>
          <li id="slidee2"><Image src="/images/contacts/EnterParking2.jpg" width="0" height="0" sizes="100vw" alt=" "/></li>
          <li id="slidee3"><Image src="/images/contacts/EnterParking3.jpg" width="0" height="0" sizes="100vw" alt=" "/></li>
          <li id="slidee4"><Image src="/images/contacts/EnterStreetParking3.jpg" width="0" height="0" sizes="100vw" alt=" "/></li>
          <li id="slidee5"><Image src="/images/contacts/EnterStreetParking4.jpg" width="0" height="0" sizes="100vw" alt=" "/></li>
          <li id="slidee6"><Image src="/images/contacts/EnterStreetParking5.jpg" width="0" height="0" sizes="100vw" alt=" "/></li>
          <li id="slidee7"><Image src="/images/contacts/EnterStreetParking6.jpg" width="0" height="0" sizes="100vw" alt=" "/></li>
        </ul>
      </div>
    </section>
  )
}
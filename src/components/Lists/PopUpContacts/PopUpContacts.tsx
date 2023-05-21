import AddressIcon from '@/components/Icons/Address/AddressIcon';
import EmailIcon from '@/components/Icons/Email/EmailIcon';
import PhoneIcon from '@/components/Icons/Phone/PhoneIcon';
import TelegramIcon from '@/components/Icons/Telegram/TelegramIcon';
import ViberIcon from '@/components/Icons/Viber/ViberIcon';
import VkIcon from '@/components/Icons/Vk/VkIcon';
import Link from 'next/link';
import styles from './PopUpContacts.module.css';

const PopUpContacts = () => {
  return (
    <div className={styles.contacts__popup}>
      <ul className={styles.contacts__list}>
        <li className={styles.contacts__item}>
          <Link className={styles.contacts__link} href="">
            <PhoneIcon size={24}/>
            <p>+7 (831) 4 133 224</p>
          </Link>
        </li>
        <li className={styles.contacts__item}>
          <Link className={styles.contacts__link} href="">
            <EmailIcon size={24}/>
            <p>uristnn.ru@yandex.ru</p>
          </Link>
        </li>
        <li className={styles.contacts__item}>
          <Link className={styles.contacts__link} href="">
            <AddressIcon size={24}/>
            <p>603002, Нижний Новгород, ул.Литвинова, д.74Б, 5 этаж, офис 501</p>
          </Link>
        </li>
      </ul>
      <ul className={styles.social}>
        <li>
          <VkIcon size={32} />
        </li>
        <li>
          <ViberIcon size={32} />
        </li>
        <li>
          <TelegramIcon size={32} />
        </li>
      </ul>
    </div>
  );
};

export default PopUpContacts;

import TelegramIcon from "@/components/Icons/Telegram/TelegramIcon";
import ViberIcon from "@/components/Icons/Viber/ViberIcon";
import VkIcon from "@/components/Icons/Vk/VkIcon";
import styles from "./SocialList.module.css";

const SocialList = () => {
  return (
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
  );
}

export default SocialList;

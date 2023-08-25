"use client"

import { useActionMenu } from "@/store";
import ChatIcon from "@/components/Icons/Chat/ChatIcon";
import TelegramIcon from "@/components/Icons/Telegram/TelegramIcon";
import ViberIcon from "@/components/Icons/Viber/ViberIcon";
import VkIcon from "@/components/Icons/Vk/VkIcon";
import styles from "./ActionButton.module.css";
import PhoneIcon from "@/components/Icons/Phone/PhoneIcon";

const ActionButton = () => {
  const actionMenu = useActionMenu((state) => state.actionMenu);
  const toggleActionMenu = useActionMenu((state) => state.toggleActionMenu);

  return (
    <>
      <div className={styles.button__fixed}>
        <div className={`${styles.menu} ${!actionMenu && styles.menu__closed}`}>
          <div className={`${styles.button} ${!actionMenu && styles.button__closed}`}>
            <ViberIcon size={32} />
          </div> 
          <div className={`${styles.button} ${!actionMenu && styles.button__closed}`}>
            <VkIcon size={24} />
          </div> 
          <div className={`${styles.button} ${!actionMenu && styles.button__closed}`}>
            <TelegramIcon size={24} />
          </div> 
          <div className={`${styles.button} ${!actionMenu && styles.button__closed}`}>
            <a className="icon" href="tel:+78314133224"><PhoneIcon size={32}/></a>
          </div>
        </div>
        <button className={`${styles.button} ${styles.open__menu}`} onClick={toggleActionMenu}>
          <ChatIcon size={32}/>
        </button>
      </div>
    </>
  );
}

export default ActionButton;

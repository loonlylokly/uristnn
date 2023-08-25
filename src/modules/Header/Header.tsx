'use client'

import { useHamburgerMenu } from '@/store';
import PhoneIcon from "@/components/Icons/Phone/PhoneIcon";
import Logo from "@/components/Icons/Logo/Logo";
import DesktopMenu from "@/components/Menu/Header/Desktop/DesktopMenu";
import MobileMenu from "@/components/Menu/Header/Mobile/MobileMenu";
import styles from "./Header.module.css";

export default function Header() {
  const hamburgerMenu = useHamburgerMenu((state) => state.hamburgerMenu);
  const toggleMenu = useHamburgerMenu((state) => state.toggleMenu);

  return (
    <>
      <header className={styles.header}>
        <a className={styles.phone__icon} href="tel:+78314133224"><PhoneIcon size={32}/></a>
        <Logo myClassName={styles.logo} src="/icons/logo.svg" width={48} height={48}/>

        <DesktopMenu />

        <a className={`${styles.btn__phone2} btn btnSecondary`} href="tel:+78314133224">+7 831 413-32-24</a>
        <button className={styles.hamburger} onClick={toggleMenu} aria-label="Мобильное меню"><span></span><span></span><span></span></button>
      </header>
      
      <MobileMenu myClassName={`${hamburgerMenu ? styles.openMenu : styles.closeMenu}`} />
    </>
  )
}
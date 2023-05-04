'use client'

import PhoneIcon from "@/components/Icons/Phone/PhoneIcon";
import Logo from "@/components/Icons/Logo/Logo";
import DesktopMenu from "@/components/Menu/Header/Desktop/DesktopMenu";
import styles from "./Header.module.css";
import MobileMenu from "@/components/Menu/Header/Mobile/MobileMenu";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <a className={styles.phone__icon} href="tel:+78314133224"><PhoneIcon size={32}/></a>
        <Logo myClassName={styles.logo} src="/icons/logo.svg" width={48} height={48}/>

        <DesktopMenu />

        <a className={`${styles.btn__phone2} btn btnSecondary`} href="tel:+78314133224">+7 831 413-32-24</a>
        <button className={styles.hamburger}><span></span><span></span><span></span></button>
      </header>
      
      <MobileMenu myClassName={styles.closeMenu} />
    </>
  )
}
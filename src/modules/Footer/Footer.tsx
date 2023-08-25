import Link from 'next/link';
// import Logo from '@/components/Icons/Logo/Logo';
import SocialList from '@/components/Lists/Social/SocialList';
import Contacts from '@/components/Lists/Footer/ContactsFooter/Contacts';
import CompaniesServices from '@/components/Lists/Footer/LawerServices/LawerServices';
import PersonalServices from '@/components/Lists/Footer/OtherServices/OtherServices';
import FooterLogo from '@/components/Icons/Logo/FooterLogo';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}  itemScope itemType="https://schema.org/LocalBusiness">
      <div className={styles.about}>
        <FooterLogo myClassName={styles.logo} src="/icons/logo.svg" width={64} height={64}/>
        <SocialList />
      </div>
      <div className={styles.contacts}>
        <h4 className={styles.contacts__title}><Link href="/contacts">Контакты</Link></h4>
        <Contacts />
      </div>
      <div className={styles.companies}>
        <h4 className={styles.companies__title}>Юридическим лицам</h4>
        <CompaniesServices />
      </div>
      <div className={styles.personal}>
        <h4 className={styles.personal__title}>Физическим лицам</h4>
        <PersonalServices />
      </div>
    </footer>
  )
}
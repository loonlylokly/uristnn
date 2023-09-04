import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/modules/Header/Header';
import Footer from '@/modules/Footer/Footer';
import ActionButton from '@/modules/ActionButton/ActionButton';
import PopUp from '@/modules/PopUp/PopUp';
import PopUpContacts from '@/components/Lists/PopUpContacts/PopUpContacts';
import PopUpForm from '@/components/Forms/PopUpForm/PopUpForm';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '«Статский Советник» Агентство Юридических Услуг',
  description: 'Юридическая помощь в Нижнем Новгороде быстро и профессионально. Юристы с опытом от 10 лет. Срочная помощь. Огромный опыт в сложных делах. Звоните нам по номеру ☎ +7 (831) 4…',
  author: 'компания Статский Советник',
  keywords: ['регистрация', 'юридический', 'ликвидация ооо', 'печать', 'договор', 'ведение дел в суде', 'юридеческие услуги', 'консультация', 'суд'],
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Header />
        <main className="main">
          {children}
        </main>
        <Footer />
        <ActionButton />
        <PopUp title={"Свяжитесь с нами!"}>
          <PopUpContacts />
          <PopUpForm />
        </PopUp>
      </body>
    </html>
  )
}

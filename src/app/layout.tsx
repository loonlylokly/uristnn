import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/modules/Header/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Агентство Юридических Услуг "Статский Советник"',
  description: 'Перечень услуг предоставляемых Компанией "Статский Советник"',
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
      </body>
    </html>
  )
}

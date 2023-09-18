import { Metadata } from 'next';
import Breadcrumbs from '@/modules/Breadcrumbs/Breadcrumbs';
import ListServices from '@/modules/ListServices/ListServices';

export const metadata: Metadata = {
  title: 'Услуги «Статский Советник» Юридическое агенство',
  description: 'Юридическая помощь в Нижнем Новгороде быстро и профессионально. Юристы с опытом от 10 лет. Срочная помощь. Контактная информация, адрес, электронная почта. Звоните нам по номеру ☎ +7 (831) 4…',
}

export default function Service() {
  return (
    <>
      <Breadcrumbs
        prevsLink={{}}
        prevsName={[]}
        current="Услуги"
      />
      <ListServices />
    </>
  )
}
import HeroService from "@/modules/Service/HeroService/HeroService";
import FAQ from "@/modules/Service/FAQ/FAQ";
import Description from "@/modules/Service/Description/Description";
import Price from "@/modules/Service/Price/Price";
import Breadcrumbs from "@/modules/Breadcrumbs/Breadcrumbs";
import { registrIp } from "@/../data/Services/register/registratsiya-ip";

export const metadata = {
  title: registrIp.metadata.title,
  description: registrIp.metadata.description,
  keywords: registrIp.metadata.keys,
}

export default function RegIP() {
  return (
    <>
      <Breadcrumbs
        prevsLink={{"Услуги":"/services"}}
        prevsName={["Услуги"]}
        current="Регистрация ИП"
      />
      <HeroService props={registrIp.hero_section} />
      <Description props={registrIp.description_1} />

      <Price
        services={[
          {
            nameSection: 'Подготовка пакета документов для регистрации ИП',
            value: '1000р',
          },
          {
            nameSection: 'Получение электронной подписи',
            value: '600р',
          },
          {
            nameSection: 'Изготовление печати',
            value: '400р',
          },
        ]}
        additional={[
          {
            nameSection: 'Госпошлина за регистрацию',
            value: '800р',
          }
        ]}
        times={[
          {
            nameSection: 'Подготовка пакета документов',
            value: '30 минут',
          },
          {
            nameSection: 'Регистрация ИП в ИФНС',
            value: '4 дня',
          },
          {
            nameSection: 'Изготовление печати',
            value: '1 день',
          },
          {
            nameSection: 'Итого',
            value: '5 рабочих дней',
          },
        ]}
      />

      <Description props={registrIp.documents_needed} />
      <Description props={registrIp.how_work} />
      <Description props={registrIp.who__need} />

      <FAQ props={registrIp.FAQ}/>
    </>
  )
}

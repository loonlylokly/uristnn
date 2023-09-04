import HeroService from "@/modules/Service/HeroService/HeroService";
import FAQ from "@/modules/Service/FAQ/FAQ";
import Description from "@/modules/Service/Description/Description";
import Price from "@/modules/Service/Price/Price";
import Breadcrumbs from "@/modules/Breadcrumbs/Breadcrumbs";
import { registrOOO } from "@/../data/Services/register/registratsiya-ooo";

export const metadata = {
  title: registrOOO.metadata.title,
  description: registrOOO.metadata.description,
  keywords: registrOOO.metadata.keys,
}

export default function RegOOO() {
  return (
    <>
      <Breadcrumbs
        prevsLink={{"Услуги":"/services"}}
        prevsName={["Услуги"]}
        current="Регистрация ООО"
      />

      <HeroService props={registrOOO.hero_section} />
      <Description props={registrOOO.description_1} />

      <Price
        services={[
          {
            nameSection: 'Консультация по регистрации ООО',
            value: 'Бесплатно',
          },
          {
            nameSection: 'Подготовка пакета документов для регистрации ООО',
            value: '4500р',
          },
          {
            nameSection: 'Получение электронной подписи</a> (если необходимо)',
            value: '800р',
          },
          {
            nameSection: 'Изготовление печати (в оснастке автомат "хлопушка")',
            value: '700р',
          },
          {
            nameSection: 'Стоимость',
            value: '6000р',
          },
        ]}
        additional={[
          {
            nameSection: 'Госпошлина за регистрацию юридического лица',
            value: '--4000р--',
          }
        ]}
        times={[
          {
            nameSection: 'Подготовка пакета документов',
            value: '1 день',
          },
          {
            nameSection: 'Регистрация ООО в ИФНС',
            value: '4 дня',
          },
          {
            nameSection: 'Изготовление печати',
            value: '1 день',
          },
          {
            nameSection: 'Итого',
            value: '6 рабочих дней',
          },
        ]}
      />

      <Description props={registrOOO.description_2} />

      <Description props={registrOOO.documents_needed} />
      <Description props={registrOOO.how_work} />
      <Description props={registrOOO.who__need} />

      <FAQ props={registrOOO.FAQ}/>
    </>
  )
}

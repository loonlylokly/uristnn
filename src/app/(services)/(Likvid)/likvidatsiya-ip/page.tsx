import HeroService from "@/modules/Service/HeroService/HeroService";
import FAQ from "@/modules/Service/FAQ/FAQ";
import Description from "@/modules/Service/Description/Description";
import Price from "@/modules/Service/Price/Price";
import Breadcrumbs from "@/modules/Breadcrumbs/Breadcrumbs";
import { likvidIp } from "@/../data/Services/likvid/likvidatsiya-ip";

export const metadata = {
  title: likvidIp.metadata.title,
  description: likvidIp.metadata.description,
  keywords: likvidIp.metadata.keys,
}

export default function LikvidIP() {
  return (
    <>
      <Breadcrumbs
        prevsLink={{"Услуги":"/services"}}
        prevsName={["Услуги"]}
        current="Ликвидация ИП"
      />

      <HeroService props={likvidIp.hero_section} />
      <Description props={likvidIp.description_1} />

      <Price
        services={[
          {
            nameSection: 'Подготовка пакета документов для закрытия ИП',
            value: '1000р',
          },
          {
            nameSection: 'Получение электронной подписи',
            value: '600р',
          }
        ]}
        additional={[
          {
            nameSection: 'Дополнительные расходы на нотариальное заверение формы',
            value: 'около 1550р',
          }
        ]}
        times={[
          {
            nameSection: 'Подготовка пакета документов',
            value: '30 минут',
          },
          {
            nameSection: 'Регистрация ИП в ИФНС',
            value: '6 дней',
          }
        ]}
      />

      <Description props={likvidIp.documents_needed} />
      <Description props={likvidIp.how_work} />
      <Description props={likvidIp.who__need} />

      <FAQ props={likvidIp.FAQ}/>
      
    </>
  )
}

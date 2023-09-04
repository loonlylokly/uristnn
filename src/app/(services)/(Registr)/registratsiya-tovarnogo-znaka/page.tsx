import HeroService from "@/modules/Service/HeroService/HeroService";
import FAQ from "@/modules/Service/FAQ/FAQ";
import Description from "@/modules/Service/Description/Description";
import Price from "@/modules/Service/Price/Price";
import Breadcrumbs from "@/modules/Breadcrumbs/Breadcrumbs";
import { registrTZ } from "@/../data/Services/register/registratsiya-tz";

export const metadata = {
  title: registrTZ.metadata.title,
  description: registrTZ.metadata.description,
  keywords: registrTZ.metadata.keys,
}

export default function RegTovZnak() {
  return (
    <>
      <Breadcrumbs
        prevsLink={{"Услуги":"/services"}}
        prevsName={["Услуги"]}
        current="Регистрация товарных знаков"
      />
      <HeroService props={registrTZ.hero_section} />
      <Description props={registrTZ.description_1} />
      <Description props={registrTZ.description_2} />

      <Price
        services={[
          {
            nameSection: 'Услуга проверки товарного знака в реестре зарегистрированных товарных знаков и подбор классов МКТУ',
            value: '3500р',
          },
          {
            nameSection: 'Услуга регистрация одного товарного знака',
            value: '27000р',
          },
          {
            nameSection: 'Гос. пошлина за проведение экспертизы обозначения товарного знака',
            value: '11500р',
          },
          {
            nameSection: 'Гос. пошлина за подачу заявки по одному товарному знаку',
            value: '3500р',
          },
          {
            nameSection: 'Гос. пошлина за регистрацию одного товарного знака',
            value: '16000р',
          },
          {
            nameSection: 'Гос. пошлина за выдачу свидетельства на товарный знак',
            value: '2000р',
          },
        ]}
        additional={[]}
        times={[]}
      />
      <Description props={registrTZ.description_3} />

      <Description props={registrTZ.documents_needed} />
      <Description props={registrTZ.how_work} />
      <Description props={registrTZ.who__need} />

      <FAQ props={registrTZ.FAQ}/>
      
    </>
  )
}

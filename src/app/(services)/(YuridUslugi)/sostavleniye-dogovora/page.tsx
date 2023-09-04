import HeroService from "@/modules/Service/HeroService/HeroService";
import FAQ from "@/modules/Service/FAQ/FAQ";
import Description from "@/modules/Service/Description/Description";
import Price from "@/modules/Service/Price/Price";
import Breadcrumbs from "@/modules/Breadcrumbs/Breadcrumbs";
import { sostavDogovor } from "@/../data/Services/yuriduslugi/sostav-dogovor";

export const metadata = {
  title: sostavDogovor.metadata.title,
  description: sostavDogovor.metadata.description,
  keywords: sostavDogovor.metadata.keys,
}

export default function SostavDogovor() {
  return (
    <>
      <Breadcrumbs
        prevsLink={{"Услуги":"/services"}}
        prevsName={["Услуги"]}
        current="Составление и анализ договоров"
      />
      
      <HeroService props={sostavDogovor.hero_section} />
      <Description props={sostavDogovor.description_1} />

      <Price
        services={[
          {
            nameSection: 'Типовой бланк',
            value: 'от 3000р',
          },
          {
            nameSection: 'Проект договора по индивидуальному заказу',
            value: 'от 5000р',
          },
          {
            nameSection: 'Анализ договора',
            value: 'от 5000р',
          },
        ]}
        additional={[]}
        times={[]}
      />

      <Description props={sostavDogovor.documents_needed} />
      <Description props={sostavDogovor.how_work} />
      <Description props={sostavDogovor.who__need} />

      <FAQ props={sostavDogovor.FAQ}/>

    </>
  )
}

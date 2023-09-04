import HeroService from "@/modules/Service/HeroService/HeroService";
import FAQ from "@/modules/Service/FAQ/FAQ";
import Description from "@/modules/Service/Description/Description";
import Price from "@/modules/Service/Price/Price";
import Breadcrumbs from "@/modules/Breadcrumbs/Breadcrumbs";
import { vedBukhgal } from "@/../data/Services/buhuslugi/ved-bukhgal";

export const metadata = {
  title: vedBukhgal.metadata.title,
  description: vedBukhgal.metadata.description,
  keywords: vedBukhgal.metadata.keys,
}

export default function VedenieBuh() {
  return (
    <>
      <Breadcrumbs
        prevsLink={{"Услуги":"/services"}}
        prevsName={["Услуги"]}
        current="Ведение бухгалтерии"
      />

      <HeroService props={vedBukhgal.hero_section} />
      <Description props={vedBukhgal.description_1} />

      <Price
        services={[
          {
            nameSection: 'Бухгалтерское сопровождение УСН или патент',
            value: 'от 5000 в месяц',
          },
          {
            nameSection: 'Бухгалтерское сопровождение НДС',
            value: 'от 8000 в месяц',
          },
          {
            nameSection: 'Восстановление бухгалтерии',
            value: 'от 4500р',
          },
          {
            nameSection: 'Кадровое делопроизводство',
            value: '900р (за каждого сотрудника)',
          },
          {
            nameSection: 'Бухгалтерская консультация',
            value: 'от 500р',
          },
        ]}
        additional={[]}
        times={[]}
      />

      <Description props={vedBukhgal.documents_needed} />
      <Description props={vedBukhgal.how_work} />
      <Description props={vedBukhgal.who__need} />

      <FAQ props={vedBukhgal.FAQ}/>
    </>
  )
}

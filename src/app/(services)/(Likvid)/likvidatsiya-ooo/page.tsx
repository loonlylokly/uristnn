import HeroService from "@/modules/Service/HeroService/HeroService";
import FAQ from "@/modules/Service/FAQ/FAQ";
import Description from "@/modules/Service/Description/Description";
import Price from "@/modules/Service/Price/Price";
import Breadcrumbs from "@/modules/Breadcrumbs/Breadcrumbs";
import { likvidOOO } from "@/../data/Services/likvid/likvidatsiya-ooo";

export const metadata = {
  title: likvidOOO.metadata.title,
  description: likvidOOO.metadata.description,
  keywords: likvidOOO.metadata.keys,
}

export default function LikvidOOO() {
  return (
    <>
      <Breadcrumbs
        prevsLink={{"Услуги":"/services"}}
        prevsName={["Услуги"]}
        current="Ликвидация ООО"
      />

      <HeroService props={likvidOOO.hero_section} />
      <Description props={likvidOOO.description_1} />
      <Description props={likvidOOO.description_2} />

      <Price
        services={[
          {
            nameSection: 'Юридическое сопровождение ликвидации ООО по уставу',
            value: '15000р',
          },
          {
            nameSection: 'Содействие в прохождении налоговой проверки',
            value: 'Договорная',
          }
        ]}
        additional={[
          {
            nameSection: 'Электронная подпись',
            value: '3000р',
          }
        ]}
        times={[
          {
            nameSection: 'Процедура',
            value: 'от 4-х месяцев',
          }
        ]}
      />

      <Description props={likvidOOO.documents_needed} />
      <Description props={likvidOOO.how_work} />
      <Description props={likvidOOO.who__need} />

      <FAQ props={likvidOOO.FAQ}/>
    </>
  )
}

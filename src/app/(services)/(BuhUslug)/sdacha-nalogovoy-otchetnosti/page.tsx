import HeroService from "@/modules/Service/HeroService/HeroService";
import FAQ from "@/modules/Service/FAQ/FAQ";
import Description from "@/modules/Service/Description/Description";
import Price from "@/modules/Service/Price/Price";
import Breadcrumbs from "@/modules/Breadcrumbs/Breadcrumbs";
import { nalogOtchet } from "@/../data/Services/buhuslugi/nalog-otchet";

export const metadata = {
  title: nalogOtchet.metadata.title,
  description: nalogOtchet.metadata.description,
  keywords: nalogOtchet.metadata.keys,
}

export default function NalogOtchet() {
  return (
    <>
      <Breadcrumbs
        prevsLink={{"Услуги":"/services"}}
        prevsName={["Услуги"]}
        current="Сдача налоговой отчетности"
      />

      <HeroService props={nalogOtchet.hero_section} />
      <Description props={nalogOtchet.description_1} />

      <Price
        services={[
          {
            nameSection: 'Отправка электронной отчетности в ИФНС, ФСС, ПФР и Росстат',
            value: '400 р. / 1 файл',
          },
          {
            nameSection: 'Единовременное составление и сдача бухгалтерского баланса и налоговой отчетности',
            value: 'от 3000р',
          },
          {
            nameSection: 'Разовая сдача налоговой декларации',
            value: 'от 500р',
          },
          {
            nameSection: 'Составление и сдача отчетности в фонды социального страхования, пенсионный фонд',
            value: 'от 500р',
          },
        ]}
        additional={[]}
        times={[]}
      />

      <Description props={nalogOtchet.documents_needed} />
      <Description props={nalogOtchet.how_work} />
      <Description props={nalogOtchet.who__need} />

      <FAQ props={nalogOtchet.FAQ}/>
    </>
  )
}

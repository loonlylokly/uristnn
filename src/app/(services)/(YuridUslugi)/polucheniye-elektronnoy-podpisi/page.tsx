import HeroService from "@/modules/Service/HeroService/HeroService";
import FAQ from "@/modules/Service/FAQ/FAQ";
import Description from "@/modules/Service/Description/Description";
import Price from "@/modules/Service/Price/Price";
import Breadcrumbs from "@/modules/Breadcrumbs/Breadcrumbs";
import { electroPodpis } from "@/../data/Services/yuriduslugi/electr-podpis";

export const metadata = {
  title: electroPodpis.metadata.title,
  description: electroPodpis.metadata.description,
  keywords: electroPodpis.metadata.keys,
}

export default function ElectrPodpis() {
  return (
    <>
      <Breadcrumbs
        prevsLink={{"Услуги":"/services"}}
        prevsName={["Услуги"]}
        current="Электронная подпись"
      />

      <HeroService props={electroPodpis.hero_section} />
      <Description props={electroPodpis.description_1} />

      <Price
        services={[
          {
            nameSection: 'Токен для записи ЭЦП в ИФНС',
            value: '2800 р./шт.',
          }
        ]}
        additional={[]}
        times={[]}
      />

      <Description props={electroPodpis.documents_needed} />
      <Description props={electroPodpis.how_work} />
      <Description props={electroPodpis.who__need} />

      <FAQ props={electroPodpis.FAQ}/>
    </>
  )
}

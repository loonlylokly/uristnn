import HeroService from "@/modules/Service/HeroService/HeroService";
import FAQ from "@/modules/Service/FAQ/FAQ";
import Description from "@/modules/Service/Description/Description";
import Price from "@/modules/Service/Price/Price";
import Breadcrumbs from "@/modules/Breadcrumbs/Breadcrumbs";
import { yuridKonsula } from "@/../data/Services/yuriduslugi/yurid-konsulta";

export const metadata = {
  title: yuridKonsula.metadata.title,
  description: yuridKonsula.metadata.description,
  keywords: yuridKonsula.metadata.keys,
}

export default function YuridKonsulta() {
  return (
    <>
      <Breadcrumbs
        prevsLink={{"Услуги":"/services"}}
        prevsName={["Услуги"]}
        current="Юридическая консультация"
      />

      <HeroService props={yuridKonsula.hero_section} />
      <Description props={yuridKonsula.description_1} />

      <Price
        services={[
          {
            nameSection: 'Разовая устная консультация',
            value: 'от 500р',
          },
          {
            nameSection: 'Разовая письменная консультация',
            value: 'от 1000р',
          },
        ]}
        additional={[]}
        times={[]}
      />

      <Description props={yuridKonsula.how_work} />
      <Description props={yuridKonsula.who__need} />

      <FAQ props={yuridKonsula.FAQ}/>
      
    </>
  )
}

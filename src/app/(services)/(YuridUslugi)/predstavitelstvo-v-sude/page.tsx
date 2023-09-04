import HeroService from "@/modules/Service/HeroService/HeroService";
import Description from "@/modules/Service/Description/Description";
import { predVSude } from "@/../data/Services/yuriduslugi/pred-v-sude";
import Breadcrumbs from "@/modules/Breadcrumbs/Breadcrumbs";
import FAQ from "@/modules/Service/FAQ/FAQ";
import Price from "@/modules/Service/Price/Price";

export const metadata = {
  title: predVSude.metadata.title,
  description: predVSude.metadata.description,
  keywords: predVSude.metadata.keys,
}

export default function PredVSude() {
  return (
    <>
      <Breadcrumbs
        prevsLink={{"Услуги":"/services"}}
        prevsName={["Услуги"]}
        current="Представительство в суде"
      />
      <HeroService props={predVSude.hero_section} />
      <Description props={predVSude.description_1} />

      {/* <Price
        services={[
          {
            nameSection: 'Услуга 1',
            value: 'от 500р',
          },
          {
            nameSection: 'Услуга 2',
            value: 'от 1000р',
          },
        ]}
        additional={[]}
        times={[]}
      /> */}

      <Description props={predVSude.documents_needed} />
      <Description props={predVSude.how_work} />
      <Description props={predVSude.who__need} />

      <FAQ props={predVSude.FAQ}/>
    </>
  )
}

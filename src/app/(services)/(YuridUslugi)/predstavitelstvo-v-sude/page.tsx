import HeroService from "@/modules/Service/HeroService/HeroService";
import Description from "@/modules/Service/Description/Description";
import { predVSude } from "@/../data/Services/yuriduslugi/pred-v-sude";
import Breadcrumbs from "@/modules/Breadcrumbs/Breadcrumbs";

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

      <Description props={predVSude.documents_needed} />
      <Description props={predVSude.how_work} />
      <Description props={predVSude.who__need} />
    </>
  )
}

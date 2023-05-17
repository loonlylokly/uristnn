import HeroService from "@/modules/Service/HeroService/HeroService";
import FAQ from "@/modules/Service/FAQ/FAQ";
import Description from "@/modules/Service/Description/Description";
import Breadcrumbs from "@/modules/Breadcrumbs/Breadcrumbs";
import { pechatiTexts } from "@/../data/Services/pechati/pechati";

export default function Pechati() {
  return (
    <>
      <Breadcrumbs
        prevsLink={{"Услуги":"/services"}}
        prevsName={["Услуги"]}
        current="Круглая печать"
      />

      <HeroService props={pechatiTexts.hero_section} />

      <Description props={pechatiTexts.description_1} />
      <Description props={pechatiTexts.description_2} />

      <Description props={pechatiTexts.documents_needed} />
      <Description props={pechatiTexts.how_work} />
      <Description props={pechatiTexts.who__need} />
      
      <FAQ props={pechatiTexts.FAQ}/>
    </>
  )
}

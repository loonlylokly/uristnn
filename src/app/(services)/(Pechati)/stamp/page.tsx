import HeroService from "@/modules/Service/HeroService/HeroService";
import FAQ from "@/modules/Service/FAQ/FAQ";
import Description from "@/modules/Service/Description/Description";
import Breadcrumbs from "@/modules/Breadcrumbs/Breadcrumbs";
import { stampTexts } from "@/../data/Services/pechati/stamp";

export default function Stamp() {
  return (
    <>
      <Breadcrumbs
        prevsLink={{"Услуги":"/services"}}
        prevsName={["Услуги"]}
        current="Штамп"
      />
      
      <HeroService props={stampTexts.hero_section} />

      <Description props={stampTexts.description_1} />
      <Description props={stampTexts.description_2} />

      <Description props={stampTexts.documents_needed} />
      <Description props={stampTexts.how_work} />
      <Description props={stampTexts.who__need} />

      <FAQ props={stampTexts.FAQ}/>
    </>
  )
}

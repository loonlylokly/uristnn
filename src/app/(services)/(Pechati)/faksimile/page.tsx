import HeroService from "@/modules/Service/HeroService/HeroService";
import FAQ from "@/modules/Service/FAQ/FAQ";
import Description from "@/modules/Service/Description/Description";
import Breadcrumbs from "@/modules/Breadcrumbs/Breadcrumbs";
import { faksimileTexts } from "@/../data/Services/pechati/faksimile";

export default function Faksimile() {
  return (
    <>
      <Breadcrumbs
        prevsLink={{"Услуги":"/services"}}
        prevsName={["Услуги"]}
        current="Факсимиле"
      />
      <HeroService props={faksimileTexts.hero_section} />

      <Description props={faksimileTexts.description_1} />
      <Description props={faksimileTexts.description_2} />

      <Description props={faksimileTexts.documents_needed} />
      <Description props={faksimileTexts.how_work} />
      <Description props={faksimileTexts.who__need} />
      
      <FAQ props={faksimileTexts.FAQ}/>
    </>
  )
}

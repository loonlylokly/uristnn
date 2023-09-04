import HeroService from "@/modules/Service/HeroService/HeroService";
import FAQ from "@/modules/Service/FAQ/FAQ";
import Description from "@/modules/Service/Description/Description";
import Price from "@/modules/Service/Price/Price";
import Breadcrumbs from "@/modules/Breadcrumbs/Breadcrumbs";
import { likvidNo } from "@/../data/Services/likvid/likvidatsiya-no";

export const metadata = {
  title: likvidNo.metadata.title,
  description: likvidNo.metadata.description,
  keywords: likvidNo.metadata.keys,
}

export default function LikvidNekomOrg() {
  return (
    <>
      <Breadcrumbs
        prevsLink={{"Услуги":"/services"}}
        prevsName={["Услуги"]}
        current="Ликвидация НО"
      />
      
      <HeroService props={likvidNo.hero_section} />
      <Description props={likvidNo.description_1} />

      <Price
        services={[
          {
            nameSection: 'None',
            value: 'Nр',
          }
        ]}
        additional={[
          {
            nameSection: 'None',
            value: 'Nр',
          }
        ]}
        times={[
          {
            nameSection: 'None',
            value: 'N',
          }
        ]}
      />

      <Description props={likvidNo.documents_needed} />
      <Description props={likvidNo.how_work} />
      <Description props={likvidNo.who__need} />

      <FAQ props={likvidNo.FAQ}/>
    </>
  )
}

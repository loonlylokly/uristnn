import HeroService from "@/modules/Service/HeroService/HeroService";
import { predVSude } from "@/../data/Services/yuriduslugi/pred-v-sude";

export default function PredVSude() {
  return (
    <>
      <HeroService props={predVSude.hero_section} />
    </>
  )
}

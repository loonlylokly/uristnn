import HeroService from "@/modules/Service/HeroService/HeroService";
import FAQ from "@/modules/Service/FAQ/FAQ";
import Description from "@/modules/Service/Description/Description";
import Price from "@/modules/Service/Price/Price";
import Breadcrumbs from "@/modules/Breadcrumbs/Breadcrumbs";
import { vnesIzmenen } from "@/../data/Services/yuriduslugi/vnes-izmenen";

export const metadata = {
  title: vnesIzmenen.metadata.title,
  description: vnesIzmenen.metadata.description,
  keywords: vnesIzmenen.metadata.keys,
}

export default function VnesIzmenen() {
  return (
    <>
      <Breadcrumbs
        prevsLink={{"Услуги":"/services"}}
        prevsName={["Услуги"]}
        current="Внесение изменений"
      />

      <HeroService props={vnesIzmenen.hero_section} />
      <Description props={vnesIzmenen.description_1} />
      <Description props={vnesIzmenen.description_2} />
      <Description props={vnesIzmenen.description_3} />

      <Price
        services={[
          {
            nameSection: 'Изменени сведений о Индивидуальном предпринимателе (ИП, ЧП, ПБЮЛ)',
            value: '2500р',
          },
          {
            nameSection: 'Изменение состава учредителей ООО',
            value: '7200р',
          },
          {
            nameSection: 'Изменение места нахождения ООО',
            value: '7200р',
          },
          {
            nameSection: 'Прочие изменения ООО',
            value: '4500р',
          },
          {
            nameSection: 'Преобразование АО в ООО',
            value: '12000р',
          },
          {
            nameSection: 'Внесение любых изменений в сведения акционерного общества',
            value: 'от 5000р',
          },
          {
            nameSection: 'Внесение любых изменений в сведения Некоммерческих организаций: Некоммерческих партнерств, Негосударственных образовательных учреждений, Общественных организаций, Профсоюзов, Фондов',
            value: 'от 8000р',
          },
        ]}
        additional={[
          {
            nameSection: 'Нотариальное заверение одной формы',
            value: '1550р',
          },
          {
            nameSection: 'Госпошлина за регистрацию изменений в учредительных документах',
            value: '800р',
          },
        ]}
        times={[
          {
            nameSection: 'Подготовка пакета документов',
            value: '1 рабочий день',
          },
          {
            nameSection: 'Заверение у нотариуса',
            value: '1 рабочий день',
          },
          {
            nameSection: 'Регистрация изменений в ИФНС',
            value: '6 рабочих дней',
          },
          {
            nameSection: 'Итого',
            value: '8 рабочих дней',
          },
        ]}
      />

      <Description props={vnesIzmenen.documents_needed} />
      <Description props={vnesIzmenen.how_work} />
      <Description props={vnesIzmenen.who__need} />

      <FAQ props={vnesIzmenen.FAQ}/>
    </>
  )
}

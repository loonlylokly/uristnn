import HeroService from "@/modules/Service/HeroService/HeroService";
import FAQ from "@/modules/Service/FAQ/FAQ";
import Description from "@/modules/Service/Description/Description";
import Price from "@/modules/Service/Price/Price";
import Breadcrumbs from "@/modules/Breadcrumbs/Breadcrumbs";
import { registrNo } from "@/../data/Services/register/registratsiya-no";

export default function RegNekomOrg() {
  return (
    <>
      <Breadcrumbs
        prevsLink={{"Услуги":"/services"}}
        prevsName={["Услуги"]}
        current="Регистрация НО"
      />
      <HeroService props={registrNo.hero_section} />
      <Description props={registrNo.description_1} />
      <Description props={registrNo.description_2} />

      <Price
        services={[
          {
            nameSection: 'Подробная консультация по регистрации НО',
            value: '•',
          },
          {
            nameSection: 'Подготовка пакета документов для регистрации, в том числе индивидуальная разработка устава НО',
            value: '•',
          },
          {
            nameSection: 'Сдача и получение документов в Министерстве Юстиции',
            value: '•',
          },
          {
            nameSection: 'Стоимость',
            value: 'от 10000р',
          },
          {
            nameSection: 'Изготовление печати',
            value: '700р',
          },
        ]}
        additional={[
          {
            nameSection: 'Госпошлина за регистрацию',
            value: '4000р',
          },
          {
            nameSection: 'Нотариальное удостоверение заявления',
            value: '1550р',
          },
          {
            nameSection: 'Заверение нотариальной доверенности',
            value: '2240р',
          },
        ]}
        times={[
          {
            nameSection: 'Подготовка пакета документов',
            value: '5 дней',
          },
          {
            nameSection: 'Заверение у нотариуса',
            value: '1 день',
          },
          {
            nameSection: 'Регистрация в Министерстве Юстиции',
            value: 'около 30 дней',
          },
          {
            nameSection: 'Изготовление печати',
            value: '1 день',
          },
        ]}
      />

      <Description props={registrNo.documents_needed} />
      <Description props={registrNo.how_work} />
      <Description props={registrNo.who__need} />

      <FAQ props={registrNo.FAQ}/>
      
    </>
  )
}

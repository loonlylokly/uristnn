import HeroService from "@/modules/Service/HeroService/HeroService";
import FAQ from "@/modules/Service/FAQ/FAQ";
import Description from "@/modules/Service/Description/Description";
import Price from "@/modules/Service/Price/Price";
import Breadcrumbs from "@/modules/Breadcrumbs/Breadcrumbs";

export default function RegTovarish() {
  return (
    <>
      <Breadcrumbs
        prevsLink={{"Услуги":"/services"}}
        prevsName={["Услуги"]}
        current="Регистрация ТСЖ"
      />
      

      <Price
        services={[
          {
            nameSection: 'Консультация по ТСЖ (при заказе услуги входит в стоимость)',
            value: '500р',
          },
          {
            nameSection: 'Подготовка пакета документов для регистрации, разработка устава',
            value: '8000р',
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
          }
        ]}
        times={[
          {
            nameSection: 'Подготовка пакета документов',
            value: '1 день',
          },
          {
            nameSection: 'Регистрация ТСЖ в ИФНС',
            value: '4 дня',
          },
          {
            nameSection: 'Изготовление печати',
            value: '1 день',
          },
          {
            nameSection: 'ИТОГО',
            value: '6 рабочих дней',
          },
        ]}
      />

      
    </>
  )
}

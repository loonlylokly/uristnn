import Breadcrumbs from '@/modules/Breadcrumbs/Breadcrumbs';
import ListServices from '@/modules/ListServices/ListServices';
import { Metadata } from 'next';

export default function Service() {
  return (
    <>
      <Breadcrumbs
        prevsLink={{}}
        prevsName={[]}
        current="Услуги"
      />
      <ListServices />
    </>
  )
}
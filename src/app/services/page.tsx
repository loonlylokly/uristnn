import ListServices from '@/modules/ListServices/ListServices';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '...',
  description: '...',
}

export default function Service() {
  return (
    <>
      <ListServices />
    </>
  )
}
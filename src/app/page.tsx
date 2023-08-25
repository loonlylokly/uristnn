import Hero from '@/modules/Hero/Hero';
import Services from '@/modules/ListServices/ListServices';
import { Metadata } from 'next';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
    </>
  )
}

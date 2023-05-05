import Hero from '@/modules/Hero/Hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '...',
  description: '...',
}

export default function Home() {
  return (
    <>
      <Hero />
    </>
  )
}

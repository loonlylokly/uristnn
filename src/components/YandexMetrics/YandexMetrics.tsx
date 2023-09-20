'use client'
 
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

declare global {
  interface Window { ym: any; }
}

window.ym = window.ym || {};

export default function YandexMetrika() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  window: window;

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    window.ym(94862280, 'hit', url);

  }, [pathname, searchParams])

  return null
}
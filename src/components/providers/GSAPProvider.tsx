'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ReactNode } from 'react'


export function GSAPProvider({ children }: { children: ReactNode }) {
  return <>{children}</>
}

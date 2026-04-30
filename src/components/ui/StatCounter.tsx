'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

interface StatCounterProps {
  value: string
  duration?: number
}

export function StatCounter({ value, duration = 2 }: StatCounterProps) {
  const countRef = useRef<HTMLSpanElement>(null)
  
  // Extract number and suffix (e.g., "50M+" -> number: 50, suffix: "M+")
  const numberMatch = value.match(/(\d+)/)
  const hasNumber = numberMatch !== null
  const number = numberMatch ? parseInt(numberMatch[0]) : 0
  const suffix = hasNumber ? value.replace(number.toString(), '') : value

  useGSAP(() => {
    if (!countRef.current || !hasNumber) return

    const obj = { val: 0 }
    gsap.to(obj, {
      val: number,
      duration,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: countRef.current,
        start: 'top 90%',
      },
      onUpdate: () => {
        if (countRef.current) {
          countRef.current.innerText = Math.floor(obj.val).toString()
        }
      },
    })
  }, { scope: countRef })

  return (
    <span>
      <span ref={countRef}>
        {hasNumber ? '0' : value}
      </span>
      {hasNumber && suffix}
    </span>
  )
}

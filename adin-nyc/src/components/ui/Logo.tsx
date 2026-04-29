import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/" className="relative z-10 font-heading font-black tracking-tighter uppercase text-xl text-white">
      ADIN<span className="text-adin-green">.</span>
    </Link>
  )
}
